import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { About } from '../../../models/about.model';
import { RestAPIUrl } from '../../../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AboutService {

  constructor(private http: HttpClient) {}

  private aboutUrl = `${RestAPIUrl.fullHostURL}/about`;

  public getAbout() {
    return this.http.get<About[]>(this.aboutUrl);
  }

}
