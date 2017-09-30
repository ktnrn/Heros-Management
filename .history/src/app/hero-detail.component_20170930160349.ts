import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./app.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private lcoation: Location
    ){}
    ngOnInit(): void{
        this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHeroes(+params.get('id')).subscribe(hero => this.hero = hero);
    }
}