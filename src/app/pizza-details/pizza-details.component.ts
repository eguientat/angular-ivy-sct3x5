import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css'],
})
export class PizzaDetailsComponent implements OnInit {
  public pizza = new Pizza(
    'Mex',
    '../../assets/mex.jpg',
    'a pizza Tex-Mex, un savant mélange de ...'
  );

  constructor() {}

  ngOnInit() {}
}
