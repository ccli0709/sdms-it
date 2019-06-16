import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { EmpVO } from 'src/app/vo/EmpVO';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent implements OnInit {

  empVos: EmpVO[] = [{
    compId: '0038',
    empNo: 'A230',
    chiName: 'A230',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'A230',
    chiName: 'A230',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'A230',
    chiName: 'A230',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }, {
    compId: '0038',
    empNo: 'A230',
    chiName: 'A230',
    depNo: 'A230',
    postName: 'A230',
    phone: 'A230',
    directNo: 'A230',
    email: 'A230',
  }];
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
  }

  confirm() {
    this.ref.close('HAHAHA');
  }
}
