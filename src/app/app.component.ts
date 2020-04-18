import { Component } from '@angular/core';

// ! TEGO NIE USUWAC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// !

export class AppComponent {
  imie = '';
  nazwisko = '';
  wiek = '18';

  dataDisplayClass = 'display-none';

  changeDisplay() {
    this.dataDisplayClass = 'display-block';
  }

  clearData() {
    this.imie = '';
    this.nazwisko = '';
    this.wiek = '';
  }

}
