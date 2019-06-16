import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  item: Contact;

  constructor(private http: HttpClient) { }

  getItem(gcid) {

    // [TODO]模擬HTTP取得後端資料再傳回
    return this.http.get('/assets/contact.json');
  }

}
