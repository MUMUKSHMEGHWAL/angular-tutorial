import { Component, OnInit } from '@angular/core';
import { RedDirective } from '../css-directive.directive';


@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
