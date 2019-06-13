import { Component, OnInit } from '@angular/core';
import { EmpVO } from 'src/app/vo/EmpVO';
import { Message, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
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
  files: TreeNode[];

  constructor() {
    this.files = [
      {
        "label": "SDMS: 150人",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
        "expanded": true,
        "children": [{
          "label": "A: 50人",
          "expandedIcon": "fa fa-folder-open",
          "collapsedIcon": "fa fa-folder",
          "expanded": true,
          "children": [{
            "label": "A1: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "A11: 15人",
                "leaf": true
              },
              {
                "label": "A12: 5人",
                "leaf": true
              },
              {
                "label": "A13: 5人",
                "leaf": true
              }
            ]
          }, {
            "label": "A2: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "A21: 15人",
                "leaf": true
              },
              {
                "label": "A22: 5人",
                "leaf": true
              },
              {
                "label": "A23: 5人",
                "leaf": true
              }
            ]
          }]
        }, {
          "label": "M: 100人",
          "expandedIcon": "fa fa-folder-open",
          "collapsedIcon": "fa fa-folder",
          "expanded": true,
          "children": [{
            "label": "M1: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "M11: 15人",
                "leaf": true
              },
              {
                "label": "M12: 5人",
                "leaf": true
              },
              {
                "label": "M13: 5人",
                "leaf": true
              }
            ]
          }, {
            "label": "M2: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "M21: 15人",
                "leaf": true
              },
              {
                "label": "M22: 5人",
                "leaf": true
              },
              {
                "label": "M23: 5人",
                "leaf": true
              }
            ]
          }, {
            "label": "M3: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "M31: 15人",
                "leaf": true
              },
              {
                "label": "M32: 5人",
                "leaf": true
              },
              {
                "label": "M33: 5人",
                "leaf": true
              }
            ]
          }, {
            "label": "M4: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "M41: 15人",
                "leaf": true
              },
              {
                "label": "M42: 5人",
                "leaf": true
              },
              {
                "label": "M43: 5人",
                "leaf": true
              }
            ]
          }, {
            "label": "M5: 25人",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "expanded": false,
            "children": [
              {
                "label": "M51: 15人",
                "leaf": true
              },
              {
                "label": "M52: 5人",
                "leaf": true
              },
              {
                "label": "M53: 5人",
                "leaf": true
              }
            ]
          }]
        }]
      }
    ];

  }



  ngOnInit() {
  }

}
