import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Portfolio } from '../../../../models/portfolio.model';
import { RestAPIUrl } from '../../../../../server/rest-api-url';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailsService {

  constructor(private http: HttpClient, portfolioDetailsService: PortfolioDetailsService) {}

  private portfolioUrl = `${RestAPIUrl.fullHostURL}/portfolio/find/`;

  getPortfolioNo(no: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.portfolioUrl + no);
  }


  // getHero(id: number): Observable<Hero> {
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get<Hero>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`)));
  // }
}
