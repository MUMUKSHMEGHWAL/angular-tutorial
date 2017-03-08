import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  title : String;
  temp : number;
  constructor() { }

  ngOnInit() {
  }
  getVal(e,heading){
    this.title = heading;
  }
  getTemp(e,temp){
    this.temp  = temp;
  }
}
