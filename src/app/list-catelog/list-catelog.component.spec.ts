import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatelogComponent } from './list-catelog.component';

describe('ListCatelogComponent', () => {
  let component: ListCatelogComponent;
  let fixture: ComponentFixture<ListCatelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCatelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
