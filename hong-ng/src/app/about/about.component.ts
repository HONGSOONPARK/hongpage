import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { About } from '../models/about.model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  abouts: About[];
  constructor(private router: Router, private aboutService: AboutService) {
  }

  ngOnInit() {
    this.aboutService.getAbout()
      .subscribe( data => {
        this.abouts = data;
      });
  };


}


