import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { About } from '../models/about.model';
import { AboutService } from './about.service';

@Component({
  templateUrl: './add-about.component.html'
})
export class AddAboutComponent {

  about: About = new About();

  constructor(private router: Router, private aboutService: AboutService) {

  }

  createAbout(): void {
    this.aboutService.createAbout(this.about)
        .subscribe( data => {
          alert("About created successfully.");
        });

  };

}
