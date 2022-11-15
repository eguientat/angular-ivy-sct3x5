import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Ingredient } from '../models/ingredient';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PizzaService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject([]);

  constructor() {}

  addIngredients(ingredients: Ingredient[]): void {
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
}
