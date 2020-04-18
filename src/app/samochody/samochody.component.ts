import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.scss']
})
export class SamochodyComponent implements OnInit {
  @Input() samochodyTitle = '';
  @Input() listaSamochodow: Samochod[] = [];
  constructor() { }
  @Output() usunSamochod: EventEmitter<number> = new EventEmitter<number>();
  @Output() addSamochod: EventEmitter<Samochod> = new EventEmitter<Samochod>();
  marka: string;
  model: string;
  rok: string;
  ngOnInit() { }
  usunSamochoda(index: number) {
    this.usunSamochod.emit(index);
  }
  dodajSamochod() {
    const nowySamochod: Samochod = {
      marka: this.marka,
      model: this.model,
      rok: Number(this.rok)
    };
    this.addSamochod.emit(nowySamochod);
    this.marka = '';
    this.model = '';
    this.rok = '';
  }

}
