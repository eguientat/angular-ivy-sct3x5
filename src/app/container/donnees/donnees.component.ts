import { Component, OnInit, Input, Output } from '@angular/core';
import { Pizza } from '../../shared/pizza';

@Component({
  selector: 'app-donnees',
  templateUrl: './donnees.component.html',
  styleUrls: ['./donnees.component.css'],
})
export class DonneesComponent implements OnInit {
  CurrentPizza = new Pizza(
    'marguerite',
    '../../assets/margarita.jpg',
    "La pizza Margherita est le nom d'une spécialité culinaire traditionnelle de la ville de Naples en Italie. "
  );

  constructor() {}

  ngOnInit() {}
}
