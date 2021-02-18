import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompanyDto } from 'src/app/api/models';
import{CompanyService} from 'src/app/api/services'
import { UploadServicesService } from '../UploadServices/UploadServices.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  itemList: CompanyDto[];
  Dialog: boolean=false;

  Company: CompanyDto=new CompanyDto();
  show:boolean=true;
  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  longitude: any;
  latitude: any;
  constructor(private SpinnerService: NgxSpinnerService,
    private CompanyService: CompanyService, 
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      debugger;
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
 
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.rForm) {
      this.setupForm();
    }
  this.getLocation();
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.CompanyService.apiCompanyGetPageGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
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
      fullName:[null,Validators.required],
      email:[null,Validators.required],
      phoneNumber:[null],
      password:[null,Validators.required],
      CompanyDescription:[null],
      Latitude:[null],
      Longitude:[null],
      id:[0],
     
    });
   
  }

  openNew() {
   debugger;
 
    this.rForm.reset();
    this.setupForm();
    this.submitted = false;
    this.Dialog = true;
    this.Update=false;
    this.show=true;
}
save(){
  if(this.Update==false){
    this.Add();
  }
  else{
this.UpdateDb();
  }
  this.rForm.reset();
  this.Dialog=false;
}
getLocation(): void{
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        debugger;
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        console.log(this.longitude)
        console.log(this.latitude)
      
      });
  } else {
     console.log("No support for geolocation")
  }
}

Add() {
  debugger;
 
  this.Company.CompanyDescription=this.rForm.controls.CompanyDescription.value;
  this.Company.Latitude=this.latitude;
  this.Company.Longitude=this.longitude;
  this.Company.User.FullName=this.rForm.controls.fullName.value;
  this.Company.User.Email=this.rForm.controls.email.value;
  this.Company.User.PhoneNumber=this.rForm.controls.phoneNumber.value;
  this.Company.User.UserName=this.rForm.controls.phoneNumber.value;
  this.Company.User.Password=this.rForm.controls.password.value;
  this.Company.User.ConfirmPassword=this.rForm.controls.password.value;
  this.Company.User.Role="Company";
  let object={body: this.Company};
 
    this.CompanyService.apiCompanySaveNewPost$Json$Response(object).subscribe(
     
      next => { debugger;
        if(next.body.Code==200){
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
UpdateDb() {
  debugger;
  this.Company.CompanyDescription=this.rForm.controls.CompanyDescription.value;
 this.Company.Latitude=this.latitude;
 this.Company.Longitude=this.longitude;
 this.Company.User.FullName=this.rForm.controls.fullName.value;
 this.Company.User.Email=this.rForm.controls.email.value;
 this.Company.User.PhoneNumber=this.rForm.controls.phoneNumber.value;
 this.Company.User.UserName=this.rForm.controls.phoneNumber.value;
 this.Company.User.Password=this.rForm.controls.password.value;
 this.Company.User.ConfirmPassword=this.rForm.controls.password.value;
 this.Company.User.Role="Company";
  let object={body: this.Company};
 
    this.CompanyService.apiCompanyUpdatePut$Json$Response(object).subscribe(
     
      next => { debugger;
        if(next.body.Code ==200){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:' تم العملية بنجاح'});
       
          this.GatAll();
         }
         else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});

         }
         },
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}
showDialog(item:CompanyDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   this.show=false;
    this.rForm = this.fb.group({
      fullName:this.fb.control(item.User.FullName),
      email:this.fb.control(item.User.Email),
      phoneNumber:this.fb.control(item.User.PhoneNumber),
      password:this.fb.control(item.User.Password),
      confirmPassword:this.fb.control(item.User.Password),
      CompanyDescription:this.fb.control(item.CompanyDescription),
      Latitude:this.fb.control(item.Latitude),
      Longitude:this.fb.control(item.Longitude),
      id:this.fb.control(item.Id),
    });
}

remove(Model){
  debugger;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.CompanyService.apiCompanyDeleteDelete$Json$Response({id:object.id}).subscribe
      (
        res => {
          console.log(res);
          if(res.body.Code ==200){
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


}