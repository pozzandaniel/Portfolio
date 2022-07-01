import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  logos = ['js.png', 'angular.png', 'css.png', 'scrum.png', 'git.png', 'design.png', 'api.png', 'test-automation.png', 'databases.png'];
  skills = ['JavaScript', 'Angular', 'HTML/CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases'];
  constructor() { }
  
  ngOnInit(): void {
  }

}