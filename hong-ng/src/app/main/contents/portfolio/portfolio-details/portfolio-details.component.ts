import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Portfolio } from '../../../../models/portfolio.model';
import { PortfolioDetailsService } from './portfolio-details.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {


  portfolio: Portfolio;

  constructor(private location: Location, private route: ActivatedRoute, private portfolioDetailsService: PortfolioDetailsService ) {}

  ngOnInit() {
    this.getPortfolioNo();
  }

  getPortfolioNo(): void {
    const no = +this.route.snapshot.paramMap.get('no');
    this.portfolioDetailsService.getPortfolioNo(no)
      .subscribe(portfolio => this.portfolio = portfolio);
  }

  locationBackAngular(): void {
    this.location.back();
  }
  goBack(): void {
    this.location.back();
  }



}
