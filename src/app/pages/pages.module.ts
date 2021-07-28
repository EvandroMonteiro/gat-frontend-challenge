import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent, MainHeaderComponent],
  imports: [
    CommonModule,
    DashboardModule,
    PagesRoutingModule,
    MiscellaneousModule,
  ]
})
export class PagesModule { }
