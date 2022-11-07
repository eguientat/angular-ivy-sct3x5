import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable()
export class PizzaService {
  public panier: Pizza[] = [];

  constructor() {}

  add(ppizza: Pizza) {
    this.panier.push(ppizza);
  }
}
