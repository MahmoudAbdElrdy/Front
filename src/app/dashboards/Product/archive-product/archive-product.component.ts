import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryDto, DiscountDto, ProductDto } from 'src/app/api/models';
import { CategoryService, CompanyService, DiscountService, ProductService, UploadFileService } from 'src/app/api/services';
import {RadioButtonModule} from 'primeng/radiobutton';
import * as moment from 'moment';
@Component({
  selector: 'app-archive-product',
  templateUrl: './archive-product.component.html',
  styleUrls: ['./archive-product.component.css']
})
export class ArchiveProductComponent implements OnInit {

  itemList: ProductDto[];
  Dialog: boolean=false;
  DialogDiscount: boolean=false;
  Product: ProductDto=new ProductDto();

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
  BaseFile: string;
  CityList: any;
  constructor(private SpinnerService: NgxSpinnerService,
    private ProductService:  ProductService, 
  private translate: TranslateService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,private fb: FormBuilder ) {
     
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
   
    this.translate.setDefaultLang(localStorage.getItem('lang'));
  

  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.ProductService.apiProductGetAllArchiveGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
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
 
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.ProductService.apiProductRemoveFromDbGet$Json({id:object.id}).subscribe
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

}