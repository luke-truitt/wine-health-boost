import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodVineComponent } from './good-vine.component';

describe('GoodVineComponent', () => {
  let component: GoodVineComponent;
  let fixture: ComponentFixture<GoodVineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodVineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodVineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
