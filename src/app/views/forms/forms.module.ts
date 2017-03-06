import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { SharedModule } from '../../shared/shared.module';
 
import { FormsRoutingModule } from './forms-routing.module';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { ValidatorsComponent } from './validators/validators.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SharedModule  
    ],
  declarations: [HomeComponent, TemplateDrivenComponent, ModelDrivenComponent, ValidatorsComponent]
})
export class FormsModule { }
