import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private heroService: HeroService){

  }
  title = 'Tour of Heroes';
  heroes = heroService.getHeroes();
  selectedHero : Hero;

  onSelect(selectedHero: Hero) : void {
    this.selectedHero = selectedHero;
  }
}