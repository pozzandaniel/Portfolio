import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  path = ['logo.png', 'logohover.png'];
  img = this.path[0];

  constructor() { }

  ngOnInit(): void {
  }

  purpleColor(){
    this.img = this.path[1];
  }

  whiteColor(){
    this.img = this.path[0];
  }

}
