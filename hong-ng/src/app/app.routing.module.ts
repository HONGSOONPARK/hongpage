import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent} from './user/add-user.component';

import { NavigationComponent } from './navigation/navigation.component';

import { MainComponent } from './main/main.component';
import { ContentsComponent } from './main/contents/contents.component';

import { AboutComponent } from './main/contents/about/about.component';
import { ExperienceComponent } from './main/contents/experience/experience.component';
import { SkillComponent } from './main/contents/skill/skill.component';
import { PortfolioComponent } from './main/contents/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './main/contents/portfolio/portfolio-details/portfolio-details.component';

import { ContactComponent } from './main/contents/contact/contact.component';



const routes: Routes = [
  // { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent, data: {animation: 'MainPage'},
    children: [
      {
        path: '',
        component: ContentsComponent,
        data: {animation: 'ContentsPage'}
      },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
      { path: 'navigation', component: NavigationComponent },
      { path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'},
        children: [
        {
          path: 'detail/:no',
          component: PortfolioDetailsComponent,
          data: {animation: 'PortfolioDetailsPage'}
         },
        ]
    },
      { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} },
      { path: 'skill', component: SkillComponent, data: {animation: 'SkillPage'} },
      { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
      { path: 'detail/:no', component: PortfolioDetailsComponent, data: {animation: 'PortfolioDetailsPage'} }
    ]
  },
  // { path: 'detail/:no', component: PortfolioDetailsComponent, data: {animation: 'PortfolioDetailsPage'} },
  // { path: '**', redirectTo: 'main', pathMatch: 'full'},

  // { path: 'about', component: AboutComponent },
  // { path: 'navigation', component: NavigationComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  // { path: 'experience', component: ExperienceComponent },
  // { path: 'skill', component: SkillComponent },
  // { path: 'contact', component: ContactComponent },


  // { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  // { path: 'navigation', component: NavigationComponent },
  // { path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
  // { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} },
  // { path: 'skill', component: SkillComponent, data: {animation: 'SkillPage'} },
  // { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },


  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64] // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
