import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProductComponent } from './archive-product.component';

describe('ArchiveProductComponent', () => {
  let component: ArchiveProductComponent;
  let fixture: ComponentFixture<ArchiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
