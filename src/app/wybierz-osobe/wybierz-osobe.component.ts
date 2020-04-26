import { Component, OnInit, Input } from '@angular/core';
import { DaneOsobyService } from '../services/dane-osoby.service';

@Component({
  selector: 'app-wybierz-osobe',
  templateUrl: './wybierz-osobe.component.html',
  styleUrls: ['./wybierz-osobe.component.scss']
})
export class WybierzOsobeComponent implements OnInit {
  osoby: string[];
  constructor(private daneOsobyService: DaneOsobyService) { }
  ngOnInit() {
    this.daneOsobyService.dajListeOsob().subscribe(osoby => this.osoby =
      osoby);
  }
  onClick(osoba: string) {
    this.daneOsobyService.dodajOsobe(osoba);
    console.log('osoba', osoba);
  }
  onDelete(osoba: string) {
    this.daneOsobyService.usunDane(osoba);
  }
}
