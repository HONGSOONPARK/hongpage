import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Navigation } from '../models/navigation.model';
import { RestAPIUrl } from '../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NavigationService {

  constructor(private http:HttpClient) {}

  // private navigationUrl = 'http://localhost:8080/hong-sb/navigation';
  private navigationUrl = `${RestAPIUrl.fullHostURL}/navigation`;
  //private userUrl = '/api';

  public getNavigation() {
    return this.http.get<Navigation[]>(this.navigationUrl);
  }

}
