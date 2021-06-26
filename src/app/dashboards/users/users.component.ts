import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompanyDto, UpdateUser, UserRegisteration } from 'src/app/api/models';
import { UpdateUserWeb } from 'src/app/api/models/update-user';
import{IdentityService,UploadFileService} from 'src/app/api/services'
import { UploadServicesService } from '../UploadServices/UploadServices.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  itemList: CompanyDto[];
  Dialog: boolean=false;

  Company: UserRegisteration=new UserRegisteration();
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
  BaseFile: any;
  User: UserRegisteration=new UserRegisteration();
  UserUpdate: UpdateUserWeb=new UpdateUserWeb();
  constructor(private SpinnerService: NgxSpinnerService,
    private UserService: IdentityService, 
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder,private UploadFileService:UploadFileService, ) {
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
  this.Base();
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.UserService.getPageGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
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
      applicationUserId:[0],
     
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
    this.image='';
    this.userPhoto.nativeElement.value = null;
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
 
  
 this.User.FullName=this.rForm.controls.fullName.value;
 this.User.Email=this.rForm.controls.email.value;
 this.User.PhoneNumber=this.rForm.controls.phoneNumber.value;
 this.User.UserName=this.rForm.controls.phoneNumber.value;
 this.User.Password=this.rForm.controls.password.value;
 this.User.ConfirmPassword=this.rForm.controls.password.value;
 this.User.Role="Client";
 this.User.Image=this.image;
  let object={body: this.User};
 
    this.UserService.apiRegisterPost$Json(object).subscribe(
     
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
UpdateDb() {
  debugger;

this.UserUpdate.fullName=this.rForm.controls.fullName.value;
this.UserUpdate.email=this.rForm.controls.email.value;
this.UserUpdate.phoneNumber=this.rForm.controls.phoneNumber.value;
this.UserUpdate.userName=this.rForm.controls.phoneNumber.value;
this.UserUpdate.password=this.rForm.controls.password.value;
this.UserUpdate.image= this.image;
this.UserUpdate.applicationUserId=this.rForm.controls.applicationUserId.value;
  let object={body: this.UserUpdate};
 
    this.UserService.updateUserWebPost$Json$Response(object).subscribe(
     
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
showDialog(item:any){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   this.show=false;
    this.rForm = this.fb.group({
      fullName:this.fb.control(item.FullName),
      email:this.fb.control(item.Email),
      phoneNumber:this.fb.control(item.PhoneNumber),
      password:this.fb.control(item.Password),
      confirmPassword:this.fb.control(item.Password),
     
      applicationUserId:this.fb.control(item.Id),
      
    });
    this.image=item.Image!=null?item.Image:"";
    this.userPhoto.nativeElement.value = null;
}

remove(Model){
  debugger;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.UserService.deleteGet$Json({id:object.id}).subscribe
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
image: any;
fileToUpload = null;
@ViewChild('userPhoto') userPhoto: ElementRef;
uploadImage(event) 
{
  debugger;
  let files = event.target.files;
  this.fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file',  this.fileToUpload,  this.fileToUpload.name);
/*     const result= event as any;
*/     this.UploadServicesService.UploadImage(formData).subscribe(event => {
  debugger;
  const result= event as any;

  this.image=result.Data;
  this.fileToUpload=null;
  this.rForm.patchValue({
    image: result.Data
  });
   }
   );
  

} 
Base(){
 
  this.UploadFileService.apiUploadFileBaseGet$Json()
  .subscribe(res=>{
    this.BaseFile=res;
  })
}
}