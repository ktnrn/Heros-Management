import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

const HEROES: Hero[] = [
  { id: 1, name: 'Aamir Khan'},
  { id: 2, name: 'Sheif Ali Khan'},
  { id: 3, name: 'Akshay Kumar'},
  { id: 4, name: 'Hritik Roshan'},
  { id: 5, name: 'Ajay Devgan'},
  { id: 6, name: 'Manoj Bajpai'},
  { id: 7, name: 'Tushar Kapoor'}
];
export class AppComponent {
  title = 'Tour of Heroes';
  hero : Hero = {
    id: 1,
    name: 'Amir Khan'
  };
  heroes = HEROES;
}
export class Hero {
  id: Number;
  name: string;
}