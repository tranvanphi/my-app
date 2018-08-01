import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostChildComponent } from './list-post-child.component';

describe('ListPostChildComponent', () => {
  let component: ListPostChildComponent;
  let fixture: ComponentFixture<ListPostChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
