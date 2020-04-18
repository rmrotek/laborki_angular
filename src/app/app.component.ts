import { Component, OnInit } from '@angular/core';
import { Samochod } from './samochod';

// ! TEGO NIE USUWAC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// !

export class AppComponent implements OnInit {
  studenci: string[];
  isCreated = false;
  ngOnInit(): void {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech',
      'Ziemowit'];
  }
  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreated = true;
    } else {
      this.isCreated = false;
      this.studenci.push(student);
    }
  }
  onUsunStudent(index: number) {
    this.isCreated = false;
    this.studenci.splice(index, 1);
  }
}

// samochodyTitle = 'Moje Samochody';
// listaSamochodow: Samochod[] = [
//   {
//     marka: 'bmw',
//     model: '520d',
//     rok: 2010
//   },
//   {
//     marka: 'bmw',
//     model: '520d'
//   },
//   {
//     marka: 'audi',
//     model: 'bez kierunkowskazow'
//   }
// ];