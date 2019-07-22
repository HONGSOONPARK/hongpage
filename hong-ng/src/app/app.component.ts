import { Component, HostBinding } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Location} from '@angular/common';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private location: Location, private router: Router) {}

  // title = 'Angular Free Board  ~ ! ';
}
