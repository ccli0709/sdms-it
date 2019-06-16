import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuotationComponent } from './dialog-quotation.component';

describe('DialogQuotationComponent', () => {
  let component: DialogQuotationComponent;
  let fixture: ComponentFixture<DialogQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
