import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { DirectivesRoutingModule } from './directives-routing.module';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { RedDirective } from './css-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, CssComponent,RedDirective]
})
export class DirectivesModule { }
