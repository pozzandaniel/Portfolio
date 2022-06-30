import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {
  path = ['down.png', 'downhover.png'];
  img = this.path[0];
  constructor() { }

  ngOnInit(): void {
  }

  bluegreenColor(){
    this.img = this.path[1]
  }

  whiteColor(){
    this.img = this.path[0];
  }

}
