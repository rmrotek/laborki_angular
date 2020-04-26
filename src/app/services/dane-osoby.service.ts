import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DaneOsobyService {
  private listaOsob = new Subject<string[]>();
  private osoby: string[] = [];
  constructor() { }
  dodajOsobe(osoba: string): void {
    if (!this.osoby.includes(osoba)) {
      this.osoby.push(osoba);
    }
    this.listaOsob.next(this.osoby);
  }
  dajOsoby(): Observable<string[]> {
    return this.listaOsob.asObservable();
  }
  reset() {
    this.osoby = [];
    this.listaOsob.next(this.osoby);
  }
  usunOsobe(osoba: string): void {
    const index = this.osoby.indexOf(osoba);

    if (index > -1) {
      this.osoby.splice(index, 1);
    }
    this.listaOsob.next(this.osoby);
  }
}
