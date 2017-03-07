import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { ReversePipe } from './angular/reverse.pipe';
import { TempConverterPipe } from './angular/temp-converter.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,SharedModule
  ],
  declarations: [HomeComponent, AngularComponent,ReversePipe, TempConverterPipe]
})
export class PipesModule { }
