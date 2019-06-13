import { Component, OnInit } from '@angular/core';
import { EmpVO } from 'src/app/vo/EmpVO';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-common-user-picker',
  templateUrl: './common-user-picker.component.html',
  styleUrls: ['./common-user-picker.component.css']
})
export class CommonUserPickerComponent implements OnInit {
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

}
