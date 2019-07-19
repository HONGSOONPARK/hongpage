import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Skill } from '../../../models/skill.model';
import { RestAPIUrl } from '../../../../server/rest-api-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SkillService {

  constructor(private http: HttpClient) {}

  // private skillUrl = 'http://localhost:8080/hong-sb/skill';

  private skillUrl = `${RestAPIUrl.fullHostURL}/skill`;

  // private userUrl = '/api';

  public getSkill() {
    return this.http.get<Skill[]>(this.skillUrl);
  }

}
