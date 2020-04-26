import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SamochodyComponent } from './samochody/samochody.component';
import { WybierzOsobeComponent } from './wybierz-osobe/wybierz-osobe.component';
import { WyswietlOsobeComponent } from './wyswietl-osobe/wyswietl-osobe.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    SamochodyComponent,
    WybierzOsobeComponent,
    WyswietlOsobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
