import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('toggle', [

      state('active', style({backgroundColor: '#FA2759'})),

      state('inactive', style({backgroundColor: 'transparent'})),

      transition('active <=> inactive', animate('100ms ease-in-out'))
     
    ])
  ],
})


export class PortfolioComponent implements OnInit {
  elPolloLoco = new Project('El Pollo Loco', 'Javascript');
  join = new Project('Join', 'Javascript');
  ringOfFire = new Project('Ring Of Fire', 'Angular');
  casual = new Project('Casual', 'Angular');
  javascript:boolean = true;
  angular:boolean = true;

  ngOnInit(): void {
  }
  
  projects = [
    this.elPolloLoco,
    this.join,
    this.ringOfFire,
    this.casual
  ]

  allIsActive:string = 'active';
  angularIsActive:string = 'inactive';
  javascriptIsActive:string = 'inactive';


  toggleAllIsActive(){
    if(this.angularIsActive === 'active' || this.javascriptIsActive === 'active'){
      this.allIsActive = 'active'; 
      this.angularIsActive = 'inactive';
      this.javascriptIsActive = 'inactive';
    }

  }

  toggleAngularIsActive(){
    this.angularIsActive = this.angularIsActive === 'inactive' ? 'active' : 'inactive';
    this.javascriptIsActive = 'inactive';
    if(this.angularIsActive === 'inactive'){
      this.allIsActive = 'active';
      this.getAll();
    } else {
      this.allIsActive = 'inactive';
    }
  }

  toggleJavascriptIsActive(){
    this.javascriptIsActive = this.javascriptIsActive === 'inactive' ? 'active' : 'inactive';
    this.angularIsActive = 'inactive';
    if(this.javascriptIsActive === 'inactive'){
      this.allIsActive = 'active';
      this.getAll();
    } else {
      this.allIsActive = 'inactive';
    }
  }

  getJavascript(){
    this.angular = false; 
    this.javascript = true;
  }

  getAngular(){
    this.javascript = false;
    this.angular = true;
  }

  getAll(){
    this.javascript = true;
    this.angular = true;
  }

}

class Project {
  title = '';
  language = '';

  constructor(title:string, language:string){
    this.title = title;
    this.language = language;
  }
}
