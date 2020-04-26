import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlOsobeComponent } from './wyswietl-osobe.component';

describe('WyswietlOsobeComponent', () => {
  let component: WyswietlOsobeComponent;
  let fixture: ComponentFixture<WyswietlOsobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyswietlOsobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyswietlOsobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
