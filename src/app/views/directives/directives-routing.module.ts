import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component' ;
import { CssComponent } from './css/css.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo:'directive',
    pathMatch: 'full'
  },{
    path: 'directive',
    component: CssComponent
  }] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DirectivesRoutingModule { }
