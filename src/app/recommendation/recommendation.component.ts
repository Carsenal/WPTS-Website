import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  person: Person;

  constructor() {
    //this.person = p;
    this.person = new Person();
    this.person.name = 'Carson Riker';
    this.person.pfp = '../assets/pfp.jpg';
  }

  ngOnInit() {
  }

}
