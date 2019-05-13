import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Experience } from '../models/experience.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: []
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];
  constructor(private router: Router, private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.experienceService.getExperience()
      .subscribe( data => {
        this.experiences = data;
      });
  };


}


