import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { EmpVO } from 'src/app/vo/EmpVO';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  selectedItem: EmpVO;
  empVos: EmpVO[] = [{
    compId: '0038',
    empNo: 'SD0027',
    chiName: '李政忠',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'SD0021',
    chiName: '李老大',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'SD0022',
    chiName: '李老二',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'SD0023',
    chiName: '李老三',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }];
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  dept: string;
  type: string;

  ngOnInit() {
    // 取得由母元件呼叫時帶入的參數
    this.dept = this.config.data.dept;
    this.type = this.config.data.type;
  }

  confirm(event) {
    this.ref.close(event.data.empNo);
  }
}
