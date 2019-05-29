import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Portfolio } from '../models/portfolio.model';
import { RestAPIUrl } from '../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PortfolioService {

  constructor(private http:HttpClient) {}

  // private portfolioUrl = 'http://localhost:8080/hong-sb/portfolio';
  private portfolioUrl = `${RestAPIUrl.fullHostURL}/portfolio`;
  //private userUrl = '/api';

  public getPortfolio() {
    return this.http.get<Portfolio[]>(this.portfolioUrl);
  }

}
