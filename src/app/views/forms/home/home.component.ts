import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'FORMS';
  submenu = [{
    name: 'Template Driven Form',
    path: 'template-driven'
  }, {
    name: 'Model Driven Form',
    path: 'model-driven'
  }, {
    name: 'Validation',
    path: 'validation'
  }];
  constructor() { }

  ngOnInit() {
  }

}
