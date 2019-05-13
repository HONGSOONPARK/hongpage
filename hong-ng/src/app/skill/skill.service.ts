import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Skill } from '../models/skill.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SkillService {

  constructor(private http:HttpClient) {}

  private skillUrl = 'http://localhost:8080/hong-sb/skill';
  //private userUrl = '/api';

  public getSkill() {
    return this.http.get<Skill[]>(this.skillUrl);
  }

}
