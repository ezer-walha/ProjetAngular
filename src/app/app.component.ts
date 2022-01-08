import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  session_name='node js';
  nbpart:number=0;
  firstSession={ 
    id:1,
    name:'Formation Web',
    track:'Mean stack',
    date:new Date('2021-11-20'),
    duree:3,
    local:'Tunis',
    participants:0 
  };
  nbrParticipantsChange(event: { value: number; }){
    this.nbpart=event.value;
  }
}
