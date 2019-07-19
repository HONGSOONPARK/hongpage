import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AllMaterialModule} from './material.module';



// Component
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AboutComponent } from './main/contents/about/about.component';
import { ExperienceComponent } from './main/contents/experience/experience.component';
import { SkillComponent } from './main/contents/skill/skill.component';
import { PortfolioComponent } from './main/contents/portfolio/portfolio.component';
import { ContactComponent } from './main/contents/contact/contact.component';

// Serviece
import {UserService} from './user/user.service';
import {AddUserComponent} from './user/add-user.component';
import {AboutService} from './main/contents/about/about.service';
import {NavigationService} from './navigation/navigation.service';
import {ExperienceService} from './main/contents/experience/experience.service';
import {SkillService} from './main/contents/skill/skill.service';
import {PortfolioService} from './main/contents/portfolio/portfolio.service';
import {ContactService} from './main/contents/contact/contact.service';

import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ContentsComponent } from './main/contents/contents.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    AboutComponent,
    NavigationComponent,
    ExperienceComponent,
    SkillComponent,
    PortfolioComponent,
    ContactComponent,
    MainComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AllMaterialModule,
    MatNativeDateModule

    // RouterModule.forRoot([
    //   { path: '', pathMatch: 'full', redirectTo: '/' },
    //   { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
    //   { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} },
    // ])
  ],
  providers: [UserService, AboutService, NavigationService, ExperienceService, SkillService, PortfolioService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
