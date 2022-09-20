import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-details',
  template: `<h1>Hello {{pp.name}}!</h1>`,
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  pp = new Pizza('oui', 'non', 'bof');

  constructor() {}

  ngOnInit() {}
}
