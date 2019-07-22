import { Component, OnInit, HostBinding, ViewChild} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Location } from '@angular/common';

import { Portfolio } from '../../../models/portfolio.model';
import { PortfolioService } from './portfolio.service';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [],
  animations: [ slideInAnimation]
})
export class PortfolioComponent implements OnInit {
  constructor(private router: Router, private portfolioService: PortfolioService, private location: Location) {
  }
  portfolios: Portfolio[];

  // @HostBinding('@.disabled')
  // public animationsDisabled = false;

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }

  ngOnInit() {
    this.portfolioService.getPortfolio()
      .subscribe( data => {
        this.portfolios = data;
      });
  }

  // locationBack() {
  //   window.history.back();
  // }

  // locationBackAngular() {
  //   this.location.back();
  // }


}


