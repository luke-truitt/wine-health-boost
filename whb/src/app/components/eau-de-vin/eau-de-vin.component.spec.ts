import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EauDeVinComponent } from './eau-de-vin.component';

describe('EauDeVinComponent', () => {
  let component: EauDeVinComponent;
  let fixture: ComponentFixture<EauDeVinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EauDeVinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EauDeVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
