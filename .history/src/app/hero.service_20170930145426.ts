import { Injectable } from '@angular/core';
import { HEROES } from '/mock-heroes';

@Injectable()
export class HeroService{
    getHeroes: void {
        return HEROES;
    }
}