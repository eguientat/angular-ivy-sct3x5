import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../shared/models/pizza';
import { Ingredient } from '../../shared/models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('tomate', 4),
    new Ingredient('Bacon', 2),
    new Ingredient('Fromage', 6),
  ];

  constructor() {}

  ngOnInit() {}
}
