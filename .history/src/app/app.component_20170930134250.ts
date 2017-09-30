import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

styles: [`
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
`]

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