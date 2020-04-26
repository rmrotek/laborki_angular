import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WybierzOsobeComponent } from './wybierz-osobe.component';

describe('WybierzOsobeComponent', () => {
  let component: WybierzOsobeComponent;
  let fixture: ComponentFixture<WybierzOsobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WybierzOsobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WybierzOsobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
