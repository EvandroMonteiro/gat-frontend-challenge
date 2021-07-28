import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [MiscellaneousComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
