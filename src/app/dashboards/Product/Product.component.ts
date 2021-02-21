import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoryDto, DiscountDto, ProductDto } from 'src/app/api/models';
import { CategoryService, CompanyService, DiscountService, ProductService, UploadFileService } from 'src/app/api/services';
import { DroubDownModel, ServiceConditionAr, ServiceConditionEn } from '../Enum/enum';
import { UploadServicesService } from '../UploadServices/UploadServices.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import { DiscountComponent } from './discount/discount.component';
import * as moment from 'moment';
export interface ImageInfo {
  imageUrl: string;
  imageName: string;
  imageExtention: string;
  imageSize: string;
}
@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('Discount', { static: true }) create: DiscountComponent;
  file2: File[];
  imageInfo2: ImageInfo[] = [];
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
  constructor(private SpinnerService: NgxSpinnerService,
    private ProductService:  ProductService, private CategoryService:CategoryService,
    private UploadServicesService:UploadServicesService,private translate: TranslateService,
    private confirmationService: ConfirmationService,private DiscountService:DiscountService,
    private router: Router,private CompanyService:CompanyService,private UploadFileService:UploadFileService,
    private messageService: MessageService,private fb: FormBuilder ) {
     
      translate.addLangs(['en','ar']);
   // this.itemList=new Array;
   }
  
  ngOnInit() {
    this.GetAllCategory();
    this.GetAllCompany();
    this.Base();
    this.translate.setDefaultLang(localStorage.getItem('lang'));
    if (!this.rForm) {
      this.setupForm();
    }
  if(!this.rFormDiscount){
    this.setupFormDiscount();
  }
  }
  paginate(event) {
    this.GatAll(event.page + 1, event.rows);
  }
  onLazyLoadData(event: any){
    this.GatAll();
  }
  GatAll(pageindex = 1, pageSize = 5){
    this.SpinnerService.show(); 
    this.ProductService.apiProductGetPageGet$Json({pageNumber:pageindex,pageSize:pageSize}).subscribe
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
  setupForm() {
    this.rForm = this.fb.group({
      'id':[0],
      'categoryId':[null,Validators.required],
      'ProdcutName': [null, Validators.required],
      'companyId':[null],
      'description':[null],
      'price':[null],
      productImages:[[],[]],
    });
   
  }


  removeAttachments2(e) {
    ;
    this.ImageUrl.splice(e, 1)
  }
  openNew() {
  
 
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
  else{
this.UpdateDb();
  }
  this.rForm.reset();
  this.Dialog=false;
}
Add() {
 
  // let formArray = this.rForm.controls['productImages'] as FormArray;
  //     formArray.patchValue(this.ImageUrl);
  let object={body: this.rForm.value};
 
    this.ProductService.apiProductSaveNewPost$Json$Response(object).subscribe(
     
      next => {
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
 
  
  let object={body: this.rForm.value};
 
    this.ProductService.apiProductUpdatePost$Json(object).subscribe(
     
      next => {
        if(next.Code ==200){
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
showDialog(item:ProductDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   this.ImageUrl=item.ProductImages;
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.Id),
      'categoryId':this.fb.control(item.CategoryId),
      'ProdcutName':this.fb.control(item.ProdcutName),
      'companyId':this.fb.control(item.CompanyId),
      'description':this.fb.control(item.Description),
      'price':this.fb.control(item.Price),
      productImages:this.fb.control(item.ProductImages),
     
    });
}

remove(Model){
 
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.ProductService.apiProductDeleteGet$Json({id:object.id}).subscribe
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
GetAllCategory(){
   
  this.CategoryService.apiCategoryGetPageGet$Json({pageNumber:0,pageSize:0}).subscribe
  (
    (res) => {
     
      console.log(("CategoryList:"+this.CategoryList));
     this.CategoryList = res.Data;
     this.CategoryList=this.CategoryList.map( (val)=> { return {label:val.CategoryName,value:val.Id}});
     console.log( res);
    },
    err => console.error(err)
  );

  
}

GetAllCompany(){
   
  this.CompanyService.apiCompanyGetPageGet$Json({pageNumber:0,pageSize:0}).subscribe
  (
    (res) => {
     
      console.log(("CompanyList:"+this.CompanyList));
     this.CompanyList = res.Data;
     this.CompanyList=this.CompanyList.map( (val)=> { return {label:val.User.FullName,value:val.Id}});
     console.log( res);
    },
    err => console.error(err)
  );

}

ImageUrl: any;
   fileToUpload = null;
   @ViewChild('userPhoto') userPhoto: ElementRef;
   uploadImage(event) 
{
 
  this.file2 = event.target.files;
  const formData = new FormData();
  for (let index = 0; index < this.file2.length; index++) {
    formData.append('files', this.file2[index]);
}
   this.UploadServicesService.UploadImage2(formData).subscribe(event => {
 debugger
  const result= event as any;
console.log(result)
  this.ImageUrl=result.filePaths;
  this.fileToUpload=null;
  this.rForm.patchValue({
    productImages: result.filePaths
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
/////////////////////////////////////Discount///////////////////////////////


setupFormDiscount() {
  this.rFormDiscount = this.fb.group({
    satrtDate:[null],
    endDate:[null],
    'id':[0],
    'discountType':[null],
    'discountValue': [null],
    'discountRate':[null],
    'discountDescription':[null],
    productId:[null]
  });
 
}
Discount: DiscountDto=new DiscountDto();
DiscountId:any;
showDialogDiscount(id){
 
  this.DialogDiscount = true;
 
  this.rFormDiscount.patchValue({
    productId:id.Id,
  });
  if(id !=null||id !=undefined){
    this.DiscountService.apiDiscountGetDiscountByProductGet$Json({id:id.Id}).subscribe
    (
      (res) => {
        
        console.log((res.Data));
       debugger;
      
        this.Discount = res.Data;
        if( this.Discount!=null||this.Discount||undefined){
          this.ShowRadioValue=this.Discount.DiscountType;
          this.DiscountId=this.Discount.Id;
          this.rFormDiscount = this.fb.group({
            productId:this.fb.control(this.Discount.ProductId),
            satrtDate:new Date(this.Discount.SatrtDate),
            endDate:new Date(this.Discount.EndDate),
          'id':this.fb.control(this.Discount.Id),
          'discountType':this.fb.control(this.Discount.DiscountType),
          'discountValue':this.fb.control(this.Discount.DiscountValue),
          'discountRate':this.fb.control(this.Discount.DiscountRate),
          'discountDescription':this.fb.control(this.Discount.DiscountDescription),
         
        });
        }
     
     
       console.log( res);
      },
      err => console.error(err)
    );
  }
 
}

ShowRadioValue:any;
changeRadioValue() {
 
 this.ShowRadioValue=this.rFormDiscount.get('discountType').value;

}
saveDiscount(){
 
  let object={body: this.rFormDiscount.value};
  var satrtDate = moment(object.body.satrtDate) ;
  var endDate =  moment(object.body.endDate);
 
  object.body.satrtDate = (satrtDate.format("M/D/YYYY") ) as any;
  object.body.endDate = (endDate.format("M/D/YYYY")) as any;
  this.DiscountService.apiDiscountSaveNewPost$Json$Response(object).subscribe(
   
    next => {
      if(next.body.Code==200){
        this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
     
        this.DialogDiscount = false;
       this.rFormDiscount.reset();
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
cancelDiscount(){
  this.DialogDiscount = false;
  this.rFormDiscount.reset();
}
removeDiscount(){
 
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id:  this.DiscountId};
      this.DiscountService.apiDiscountDeleteGet$Json({id:object.id}).subscribe
      (
        res => {
          console.log(res);
          if(res.Code ==200){
            this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  تم العملية بنجاح'});
         
            this.DialogDiscount = false;
         this.rFormDiscount.reset();
          }
          else{
            this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' حدثت مشكلة'});
            this.DialogDiscount = false;
            this.rFormDiscount.reset();
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
}