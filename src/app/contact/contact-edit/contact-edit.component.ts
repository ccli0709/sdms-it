import { Component, OnInit } from '@angular/core';
import { DialogService, MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { CommonUserPickerComponent } from 'src/app/common/common-user-picker/common-user-picker.component';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService) { }

  ngOnInit() {
  }

  showUserPicker() {
    const ref = this.dialogService.open(CommonUserPickerComponent, {
      header: '選擇使用者',
      width: '50%',
      contentStyle: { "max-height": '350px', "overflow": "auto" }
    });
  }

  create() {
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
