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
  listaSamochodow: Samochod[];
  samochodyTitle = 'Moje Samochody';
  isStudentCreated = false;
  isSamochodCreated = false;
  ngOnInit(): void {
    this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech',
      'Ziemowit'];
    this.listaSamochodow = [
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
  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isStudentCreated = true;
    } else {
      this.isStudentCreated = false;
      this.studenci.push(student);
    }
  }
  onUsunStudent(index: number) {
    this.isStudentCreated = false;
    this.studenci.splice(index, 1);
  }

  onAddSamochod(samochod: Samochod) {
    if (this.listaSamochodow.includes(samochod)) {
      this.isSamochodCreated = true;
    } else {
      this.isSamochodCreated = false;
      this.listaSamochodow.push(samochod);
    }
  }
  onUsunSamochod(index: number) {
    this.isSamochodCreated = false;
    this.listaSamochodow.splice(index, 1);
  }
}
