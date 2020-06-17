import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpacComponent } from './listarpac.component';

describe('ListarpacComponent', () => {
  let component: ListarpacComponent;
  let fixture: ComponentFixture<ListarpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
