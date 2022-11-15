import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pizza } from '../../shared/models/pizza';
import { Ingredient } from '../../shared/models/ingredient';
import { PizzaService } from '../../shared/services/pizza.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];
  private subscribtion: Subscription;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.subscribtion = this.pizzaService.panier.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
