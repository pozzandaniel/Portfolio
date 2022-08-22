import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Background } from 'src/models/background';



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
  canvas;
  home;
  ctx;
  width;
  height;
  background;
  animationFrame;

  path = ['down.png', 'downhover.png'];
  img = this.path[0];
  visible= false;
  constructor() { }

  ngOnInit(): void {
    this.visible = true;
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.home = document.getElementById('home');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.home.offsetWidth;
    this.canvas.height = this.home.offsetHeight;
    this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    this.background.animate();
    console.log('offsetwidth is: ', this.home.offsetWidth);
    
   
   
  }

  bluegreenColor(){
    this.img = this.path[1]
  }

  whiteColor(){
    this.img = this.path[0];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.background.cancelFrame();
    this.canvas.width = this.home.offsetWidth;
    this.canvas.height = this.home.offsetHeight;
    this.background = new Background(this.ctx, this.canvas.width, this.canvas.height);
    this.background.animate();
    console.log('offsetwidth is: ', this.home.offsetWidth);
  }
  

}
