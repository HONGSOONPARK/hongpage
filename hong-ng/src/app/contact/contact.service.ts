import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../models/contact.model';
import { RestAPIUrl } from '../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  private contactUrl = `${RestAPIUrl.fullHostURL}/contact`;

  public createContact(contact) {
    return this.http.post<Contact>(this.contactUrl, contact);
  }

}
