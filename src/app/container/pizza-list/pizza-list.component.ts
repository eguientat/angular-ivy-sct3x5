import { Component, OnInit } from '@angular/core';
import { Pizza } from '.../pizza';

var p = new Pizza('oui', 'non', 'bof');
var pp = new Pizza('non', 'non', 'bof');
var ppp = new Pizza('pourquoi pas', 'non', 'bof');

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  public pl: Pizza[] = [];
  constructor() {
    var pl: Pizza[] = [];
    this.pl.push(p);
    this.pl.push(pp);
    this.pl.push(ppp);
  }

  ngOnInit() {}
}
