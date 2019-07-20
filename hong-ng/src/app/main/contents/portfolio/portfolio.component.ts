import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio } from '../../../models/portfolio.model';
import { PortfolioService } from './portfolio.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];
  constructor(private router: Router, private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.getPortfolio()
      .subscribe( data => {
        this.portfolios = data;
      });
  }



}


