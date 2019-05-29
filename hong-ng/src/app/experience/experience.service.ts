import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Experience } from '../models/experience.model';
import { RestAPIUrl } from '../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExperienceService {

  constructor(private http:HttpClient) {}

  // private experienceUrl = 'http://localhost:8080/hong-sb/experience';
  private experienceUrl = `${RestAPIUrl.fullHostURL}/experience`;
  //private userUrl = '/api';

  public getExperience() {
    return this.http.get<Experience[]>(this.experienceUrl);
  }

}
