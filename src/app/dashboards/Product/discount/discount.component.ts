import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { DiscountService } from 'src/app/api/services';
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  @ViewChild('templatecreate', { static: true }) templatecreate: TemplateRef<any>;
  @Output() onAddNewStudent: EventEmitter<any> = new EventEmitter();

  modalRef: BsModalRef;
 
  saving = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right',
    size: 'lg',
  };
  constructor( private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private _DiscountService: DiscountService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
