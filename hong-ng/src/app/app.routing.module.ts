import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent} from './user/add-user.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutComponent,
    children: [
      { path: '', component: ExperienceComponent},
      { path: '', component: SkillComponent}
    ]
  },

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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
