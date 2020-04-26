import { Component, OnInit } from '@angular/core';

// ! TEGO NIE USUWAC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// !

export class AppComponent {
  osoby: string[] = ['Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek'];
}