import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LogoComponent } from './layout/logo/logo.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  AsideComponent,
  LogoComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})
export class ThemeModule { }
