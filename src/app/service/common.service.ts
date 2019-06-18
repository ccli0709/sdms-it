import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getDepartments() {
    // [TODO]模擬HTTP取得後端資料再傳回
    return this.http.get('/assets/departments.json');
  }

}
