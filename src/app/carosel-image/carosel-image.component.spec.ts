import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselImageComponent } from './carosel-image.component';

describe('CaroselImageComponent', () => {
  let component: CaroselImageComponent;
  let fixture: ComponentFixture<CaroselImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroselImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
