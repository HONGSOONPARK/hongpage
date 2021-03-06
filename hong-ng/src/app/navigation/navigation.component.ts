import { Component, OnInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

import { Navigation } from '../models/navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  top = 0;
  navigations: Navigation[];
  constructor(private router: Router, private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.getNavigation()
      .subscribe( data => {
        this.navigations = data;
      });
  }

  navClick(el: any) {


  // window.scroll(0, document.getElementById(el));

  document.getElementById(el).scrollIntoView({ behavior: 'smooth' });

    // this.menuListItemClickEmitter.emit(menuId);
    // window.scrollTo(0, 312 );
    // menuId.scrollIntoView();
    // el.scrollIntoView({ behavior: 'smooth' });
    // el.scrollIntoView({ behavior: 'smooth' });

    // el.scrollIntoView();

  }





}


