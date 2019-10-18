import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technology:Array<string>=["Html","Scss","Css","JavaScript","Angular8"]
  constructor() { }

  ngOnInit() {
  }

}
