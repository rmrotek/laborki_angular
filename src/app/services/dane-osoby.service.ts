import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DaneOsobyService {
  private listaWybranychOsob = new Subject<string[]>();
  private wybraneOsoby: string[] = [];
  private osoby: string[] = ['Kasia', 'Basia', 'Zosia', 'Tomek', 'Marek', 'Antek'];
  private listaOsob = new BehaviorSubject<string[]>(this.osoby);
  constructor() { }
  dodajOsobe(osoba: string): void {
    if (!this.wybraneOsoby.includes(osoba)) {
      this.wybraneOsoby.push(osoba);
    }
    this.listaWybranychOsob.next(this.wybraneOsoby);
  }
  dajListeOsob(): Observable<string[]> {
    return this.listaOsob.asObservable();
  }
  dajWybraneOsoby(): Observable<string[]> {
    return this.listaWybranychOsob.asObservable();
  }
  reset() {
    this.wybraneOsoby = [];
    this.listaWybranychOsob.next(this.wybraneOsoby);
  }
  usunOsobe(osoba: string): void {
    this.wybraneOsoby = this.wybraneOsoby.filter(o => o !== osoba);
    this.listaWybranychOsob.next(this.wybraneOsoby);
  }
  usunDane(osoba: string): void {
    this.usunOsobe(osoba);
    this.osoby = this.osoby.filter(o => o !== osoba);
    this.listaOsob.next(this.osoby);
  }
}
