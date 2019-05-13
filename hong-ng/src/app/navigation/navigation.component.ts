import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Navigation } from '../models/navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit {

  navigations: Navigation[];
  constructor(private router: Router, private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.getNavigation()
      .subscribe( data => {
        this.navigations = data;
      });
  };


}


