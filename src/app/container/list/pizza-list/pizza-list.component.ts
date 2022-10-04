import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from '../../../shared/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  @Input() public pizza: Pizza[] = [
    new Pizza(
      'marguerite',
      '../../assets/margarita.jpg',
      "La pizza Margherita est le nom d'une spécialité culinaire traditionnelle de la ville de Naples en Italie. "
    ),
    new Pizza(
      'Mex',
      '../../assets/mex.jpg',
      'a pizza Tex-Mex, un savant mélange de ...'
    ),
    new Pizza(
      '4 Fromages',
      '../../assets/fromage.jpg',
      "Pizza quattro formaggi Italian: est une variété de pizza dans la cuisine italienne qui est garnie d'une combinaison de quatre types de fromage"
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
