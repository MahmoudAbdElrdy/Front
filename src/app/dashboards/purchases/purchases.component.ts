import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PurchasesDto } from 'src/app/api/models';
import { PurchasesService, UploadFileService } from 'src/app/api/services';
import { AppConsts } from 'src/AppConsts';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  itemList: any[];
  Dialog: boolean=false;
  DialogDiscount: boolean=false;
  Purchases: PurchasesDto=new PurchasesDto();

  submitted: boolean;
  rForm: FormGroup;
  rFormDiscount: FormGroup;
  post: any;
  titleAlert = 'هذه الخانة مطلوبه';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  CategoryList: any;
  CompanyList: any;
  BaseFile: any;
  CityList: any;
  constructor(private SpinnerService: NgxSpinnerService,
    private PurchasesService:  PurchasesService, 
  private translate: TranslateService,private UploadFileService:UploadFileService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,private fb: FormBuilder ) {
     
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
  // this.BaseFile= AppConsts.baseUrl;
   }
  
  ngOnInit() {
   
    this.translate.setDefaultLang(localStorage.getItem('lang'));
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
    this.PurchasesService.apiPurchasesGetPurchasesGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
    (
      (res) => {
       
        console.log((res.Data));
       this.itemList = res.Data;
       this.totalRowCount = res.totalRowCount;
       console.log( res);
      },
      err => console.error(err)
    );
  
    this.SpinnerService.hide();
  }
 


remove(Model){
 
  // this.confirmationService.confirm({
  //   message: 'Are you sure that you want to delete ?',
  //   header: 'Confirmation',
  //   icon: 'pi pi-exclamation-triangle',
  //   accept: () => {
     
  //     let object={id: Model.Id};
  //     this.PurchasesService.de({id:object.id}).subscribe
  //     (
  //       res => {
  //         console.log(res);
  //         if(res.Code ==200){
  //           this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
         
  //           this.GatAll(); 
  //         }
  //         else{
  //           this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});
     
  //         }
  //       },
  //       err => console.error(err)
  //     );
  //   },
  //   reject: () => {
  //     this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
  //   }
  // });
 
}
cancel() {
  this.Dialog=false;

  this.rForm.reset();
}
Base(){
 
  this.UploadFileService.apiUploadFileBaseGet$Json()
  .subscribe(res=>{
    this.BaseFile=res;
    console.log(this.BaseFile)
  })
}
}