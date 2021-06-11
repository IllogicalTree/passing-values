import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { TableComponent } from './components/table/table.component';
import { TableCardComponent } from './components/table-card/table-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableCardComponent,
    GenericCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
