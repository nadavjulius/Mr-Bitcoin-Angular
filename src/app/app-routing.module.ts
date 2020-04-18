import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuardService } from './services/auth-guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService] },
  { path: 'contacts/edit', component: ContactEditComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'contacts/edit/:id', component: ContactEditComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'contacts/:id', component: ContactDetailsComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'statistics', component: StatisticComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
