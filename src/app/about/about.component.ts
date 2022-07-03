import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  aboutBox = [
    new BottomBox('./assets/img/icons/walk.png', 
    'MY JOURNEY BEGAN',
    'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.'),

    new BottomBox('./assets/img/icons/heart.png', 
    'MY JOURNEY BEGAN',
    'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.'),

    new BottomBox('./assets/img/icons/search.png', 
    'MY JOURNEY BEGAN',
    'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.'),

    new BottomBox('./assets/img/icons/airplane.png', 
    'MY JOURNEY BEGAN',
    'as a product manager in an industrial company. Early on, I got the chance to collaborate in multiple IT and digitalization projects.'),
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }

  
  
}

export class BottomBox{
  path:string = '';
  h4:string = '';
  p:string = '';

  constructor(path:string, h4:string, p:string){
    this.path = path;
    this.h4 = h4;
    this.p = p;
  }
}