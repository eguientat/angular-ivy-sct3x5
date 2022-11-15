import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PanierComponent } from './panier/panier.component';
import { DonneesComponent } from './container/donnees.component';

const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: 'panier', component: PanierComponent },
  { path: 'pizzas', component: DonneesComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
