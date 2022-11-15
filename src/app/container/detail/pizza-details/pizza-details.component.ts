import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../../shared/models/pizza';
import { Ingredient } from '../../../shared/models/ingredient';
import { PizzaService } from '../../../shared/services/pizza.service';

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
  public ingredient= new Ingredient("oui",4);

  constructor() {}

  ngOnInit() {}
}
