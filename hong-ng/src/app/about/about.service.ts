import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { About } from '../models/about.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AboutService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/hong-sb/about';
  //private userUrl = '/api';

  public getAbout() {
    return this.http.get<About[]>(this.userUrl);
  }
  
  public createAbout(about) {
    return this.http.post<About>(this.userUrl, about);
  }

}
