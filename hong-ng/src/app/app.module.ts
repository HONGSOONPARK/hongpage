import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';


// Component
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

// Serviece
import {UserService} from './user/user.service';
import {AboutService} from './about/about.service';

import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
