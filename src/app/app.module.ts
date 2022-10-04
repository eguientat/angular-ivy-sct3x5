import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './container/list/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './container/detail/pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
  ],
})
export class AppModule {}
