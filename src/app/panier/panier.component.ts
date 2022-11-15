import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/services/pizza.service';
import { Ingredient } from '../shared/models/ingredient';
import { Pizza } from '../shared/models/pizza';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [PizzaService],
})
export class PanierComponent implements OnInit {
  public p: PizzaService;
  public pizza: Pizza[];
  constructor() {}

  ngOnInit() {}

  addPanier(ingredients: Ingredient[]): void {
    this.p.addIngredients(ingredients);
  }
}
