import { Component, OnInit } from '@angular/core';
import { Message, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-common-menu',
  templateUrl: './common-menu.component.html',
  styleUrls: ['./common-menu.component.css']
})
export class CommonMenuComponent implements OnInit {
  panelMenuItems: MenuItem[];
  constructor() {
    this.panelMenuItems = [
      {
        label: '首頁',
        icon: 'pi pi-pw pi-home'
      },
      {
        label: '通訊錄',
        expanded: true,
        icon: 'pi pi-fw pi-users',
        items: [
          { label: '通訊錄維護', icon: 'pi pi-fw pi-pencil', routerLink: ['/contact-list'] },
          { label: '通訊錄清單', icon: 'pi pi-fw pi-bars', routerLink: ['/contact-edit'] }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
