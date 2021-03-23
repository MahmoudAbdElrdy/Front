import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NotificationClientDto, NotificationDto } from 'src/app/api/models';
import{NotificationClientService, PurchasesService} from 'src/app/api/services'
import { PurchasesServiceProxy } from 'src/shared/service-proxies/service-proxies';
import { UploadServicesService } from '../UploadServices/UploadServices.service';

@Component({
  selector: 'app-notification-client',
  templateUrl: './notification-client.component.html',
  styleUrls: ['./notification-client.component.css']
})
export class NotificationClientComponent implements OnInit {

  itemList: NotificationClientDto[];
  Dialog: boolean=false;

  NotificationClient: NotificationClientDto=new NotificationClientDto();
  Notification: NotificationDto=new NotificationDto();
  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  UserList: any;
  UsersPrint: any;
  constructor(private SpinnerService: NgxSpinnerService,
    private NotificationClientService: NotificationClientService, 
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,private Users:PurchasesService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
 this.getAllClient();
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.rForm) {
      this.setupForm();
    }
  
  }
  getAllClient(){
   
    this.Users.apiPurchasesGetAllClientGet$Json({pageNumber:0,pageSize:0}).subscribe
    (
      (res) => {
       
        console.log(("UserList:"+this.UserList));
       this.UserList = res.Data;
       this.UserList=this.UserList.map( (val)=> { return {label:val.FullName,value:val.Id}});
       console.log( res);
      },
      err => console.error(err)
    );
  
    
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 10){
    this.SpinnerService.show(); 
    this.NotificationClientService.apiNotificationClientGetAllGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
    (
      (res) => {
        debugger;
        console.log((res.Data));
       this.itemList = res.Data;
       this.totalRowCount = res.totalRowCount;
       console.log( res);
      },
      err => console.error(err)
    );
  
    this.SpinnerService.hide();
  }
  setupForm() {
    this.rForm = this.fb.group({
      'id':[0],  
      'clients': [null, Validators.required],
      'content':[null],
      'title':[null,Validators.required]
     
    });
   
  }

  openNew() {
   debugger;
 
    this.rForm.reset();
    this.setupForm();
    this.submitted = false;
    this.Dialog = true;
    this.Update=false;
}
save(){
  if(this.Update==false){
    this.Add();
  }

  this.rForm.reset();
  this.Dialog=false;
}
Add() {
  debugger;
 
 
  let object={body: this.rForm.value};
 
    this.NotificationClientService.apiNotificationClientSaveNewAdminPost$Json(object).subscribe(
     
      next => { debugger;
        if(next.Code==200){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
       
          this.GatAll(); 
        }
        else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});

        }
         } 
         ,
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}

showDialog(item:NotificationDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   this.UsersPrint = this.UserList.filter((o) => item.Clients.includes(o.value)).map(x=>x.label);
    console.log("Users==>"+ this.UsersPrint)
 //  let Users=this.UserList.filter(x=>x.any(item.Clients)).map(x=>x.label);
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.NotificationCid),  
      'clients':  this.fb.control(item.Clients), 
      'content':this.fb.control(item.Content), 
      'title':this.fb.control(item.Title), 
     
    });
}

remove(Model){
  debugger;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      debugger
     //this.Notification=Model;
this.Notification.Clients=Model.Clients;
this.Notification.Content=Model.Content;
this.Notification.NotificationCid=10;
this.Notification.Title=Model.Title;
this.Notification.Token="";
      let object={body:this.Notification};
      this.NotificationClientService.apiNotificationClientDeleteNotificationPost$Json({body:this.Notification}).subscribe
      (
        res => {
          console.log(res);
          if(res.Code ==200){
            this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
         
            this.GatAll(); 
          }
          else{
            this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});
     
          }
        },
        err => console.error(err)
      );
    },
    reject: () => {
      this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
    }
  });
 
}
cancel() {
  this.Dialog=false;

  this.rForm.reset();
}
openid(id){
  debugger;
  this.router.navigate(['SubNotificationClient', { id: id }]);
}


}