import { Component } from '@angular/core';
import { Samochod } from './samochod';

// ! TEGO NIE USUWAC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// !

export class AppComponent {
  studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
  samochodyTitle = 'Moje Samochody';
  listaSamochodow: Samochod[] = [
    {
      marka: 'bmw',
      model: '520d',
      rok: 2010
    },
    {
      marka: 'bmw',
      model: '520d'
    },
    {
      marka: 'audi',
      model: 'bez kierunkowskazow'
    }
  ];
}
