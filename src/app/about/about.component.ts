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
    'as a food specialist, I have always been keen on nutrinional science. So I decided to study Food Technology and make of my passion a job'),

    new BottomBox('./assets/img/icons/heart.png', 
    'MY FIRST EXPERIENCES',
    'I started to work in food industries and to develop my knowledge about processes and engines. This contact with the technology inspired me and give me a better hope for the future'),

    new BottomBox('./assets/img/icons/search.png', 
    'SEARCHING MY WAY',
    'I have always been fascinated of computers, since I got my first windows 95. I had my first contact with programming during a course of Excel and I understood that programming was for me something special'),

    new BottomBox('./assets/img/icons/airplane.png', 
    'FOR THE FUTURE',
    'I only have a certainty, I will start my new journey as software developer and I will do that for many years!'),
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