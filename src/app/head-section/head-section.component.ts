import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes, query, stagger} from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';



@Component({
  selector: 'app-head-section',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
    
        query('.left', [
          style({opacity: 0, transform: 'translateX(-300px)'}),
          stagger(1500, [
            animate('250ms', style({
              opacity:1, transform: 'translateX(0)'
            }))
          ])
        ])

      ])
    ])
  ],
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {
  path = ['down.png', 'downhover.png'];
  img = this.path[0];
  visible= false;
  constructor() { }

  ngOnInit(): void {
    this.visible = true;
   
   
  }

  bluegreenColor(){
    this.img = this.path[1]
  }

  whiteColor(){
    this.img = this.path[0];
  }

  

}
