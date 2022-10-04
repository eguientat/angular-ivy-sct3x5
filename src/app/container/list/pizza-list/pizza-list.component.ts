import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../../shared/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  @Input() pizza: Pizza[];
  @Input() pp : string;

  constructor() {}

  ngOnInit() {}
}
