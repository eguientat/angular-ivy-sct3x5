import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './route.module';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './container/list/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './container/detail/pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello.component';
import { DonneesComponent } from './container/donnees.component';

import { StyleDirective } from './shared/directives/style.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouting],
  declarations: [
    AppComponent,
    HelloComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
    DonneesComponent,
    StyleDirective,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    DonneesComponent,
  ],
})
export class AppModule {}
