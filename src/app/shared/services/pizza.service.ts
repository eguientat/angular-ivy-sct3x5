import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class PizzaService {
  public panier: Pizza[] = [];
  public pp: Ingredient[] = [];

  constructor() {}

  add(ppizza: Pizza) {
    this.panier.push(ppizza);
  }
}
