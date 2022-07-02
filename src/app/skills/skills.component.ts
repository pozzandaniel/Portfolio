import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, animateChild, stagger, keyframes} from '@angular/animations';







@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
   trigger('fadeInLeft', [
    transition(':enter', [
      style({opacity:0, transform: 'translateX(-200px)'}), animate('1s', style({opacity:1, transform: 'translateX(0)'}))
    ])
   ])
  ]
})
export class SkillsComponent implements OnInit {
  logos = ['js.png', 'angular.png', 'css.png', 'scrum.png', 'git.png', 'design.png', 'api.png', 'test-automation.png', 'databases.png'];
  skills =  ['JavaScript', 'Angular', 'HTML/CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases'];
  public state = false;
  constructor() { 
    

  }
  
  ngOnInit(): void {
  }

}



