import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { slideInAnimation } from '../animations';

import { Scroll, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [ slideInAnimation]
  // animation triggers go here
})
export class MainComponent implements OnInit {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  constructor(private location: Location, private router: Router) {
    router.events
      .pipe(filter(e => e instanceof Scroll || e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
      });
  }

  // }
  // constructor(private location: Location, private router: Router) {
  // }


  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.location.back();
  }

  ngOnInit() {
  }

}
