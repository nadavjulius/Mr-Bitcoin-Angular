import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ChartComponent } from './components/chart/chart.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuardService } from './services/auth-guard';
import { userService } from './services/user.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MainNavBarComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ChartComponent,
    ContactEditComponent,
    SignupComponent,
    MovesListComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [AuthGuardService, userService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }