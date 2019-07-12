import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// Serviece
import {UserService} from './user/user.service';
import {AddUserComponent} from './user/add-user.component';
import {AboutService} from './about/about.service';
import {NavigationService} from './navigation/navigation.service';
import {ExperienceService} from './experience/experience.service';
import {SkillService} from './skill/skill.service';
import {PortfolioService} from './portfolio/portfolio.service';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    AboutComponent,
    NavigationComponent,
    ExperienceComponent,
    SkillComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // RouterModule.forRoot([
    //   { path: '', pathMatch: 'full', redirectTo: '/' },
    //   { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
    //   { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} },
    // ])
  ],
  providers: [UserService, AboutService, NavigationService, ExperienceService, SkillService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
