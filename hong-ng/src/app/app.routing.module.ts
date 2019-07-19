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
import { ContactComponent } from './main/contents/contact/contact.component';



const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent,
    children: [
      {
        path: '',
        component: ContentsComponent,
      }
    ]
  },
  // { path: '', pathMatch: 'full', component: AppComponent},
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
