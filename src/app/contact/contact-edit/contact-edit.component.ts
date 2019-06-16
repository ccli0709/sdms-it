import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { DialogService, MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { DialogUserComponent } from 'src/app/dialog/dialog-user/dialog-user.component';
import { DialogQuotationComponent } from 'src/app/dialog/dialog-quotation/dialog-quotation.component';
import { EmpVO } from 'src/app/vo/EmpVO';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/model/contact';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  // [TODO]但是由後端就組好的VO物件呢?
  mainForm = this.formBuilder.group({
    compId: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
    empNo: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
    chiName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(6)])],
    depNo: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
    postName: [''],
    phone: ['', Validators.compose([Validators.required])],
    directNo: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService,
    private contactService: ContactService,
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.mainForm.controls; }

  emp2: EmpVO;
  emp: Contact;

  ngOnInit() {

    //this.emp = new EmpVO();
    //this.emp.compId = '0038';
    //this.emp.empNo = 'SD0027';
    //this.emp.chiName = '李政忠';
    //this.emp.depNo = 'A230';
    //this.emp.email = 'sd0027@sdms.com.tw';

    // 來源物件和FormBuilder的項目要完全相同
    // 來源物件的值不得為NULL(先在CLASS做初始化)
    // [OK]模擬取得後端來的物件塞入FormBuilder
    //this.mainForm.setValue(this.emp);

    // 改成用SERVICE和INTERFACE來試試
    this.contactService.getItem('SD0027')
      .subscribe((data: Contact) => {
        this.emp = data;
        this.mainForm.setValue(this.emp);
      });
  }

  showQuotationDialog() {
    const ref = this.dialogService.open(DialogQuotationComponent, {
      header: '選擇採購案號',
      width: '50%',
      contentStyle: { 'max-height': '350px', overflow: 'auto' }
    });

  }


  showUserDialog() {
    //[TODO]呼叫彈出視窗時需可以帶入參數
    const ref = this.dialogService.open(DialogUserComponent, {
      header: '選擇使用者',
      width: '50%',
      contentStyle: { 'max-height': '350px', 'overflow': 'auto' }
    });

    // 接收由彈出視窗傳回的物件並應用在此元件裡
    ref.onClose.subscribe((result: string) => {
      if (result) {
        this.f.uid.setValue(result);
      }
    });
  }

  create() {


    // stop here if form is invalid
    if (this.mainForm.invalid) {
      return;
    }

    this.confirmationService.confirm({
      message: '您確定要新增這筆資料嗎?',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: '系統訊息', detail: '你按下確定' });
      }
    });
  }
  delete() {
    this.messageService.add({ severity: 'success', summary: '系統訊息', detail: '資料查詢完成' });
  }
}
