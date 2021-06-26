import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseUserComponent } from './purchase-user.component';

describe('PurchaseUserComponent', () => {
  let component: PurchaseUserComponent;
  let fixture: ComponentFixture<PurchaseUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
