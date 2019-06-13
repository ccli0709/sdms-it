import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUserPickerComponent } from './common-user-picker.component';

describe('CommonUserPickerComponent', () => {
  let component: CommonUserPickerComponent;
  let fixture: ComponentFixture<CommonUserPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUserPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUserPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
