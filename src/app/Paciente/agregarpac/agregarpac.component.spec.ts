import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpacComponent } from './agregarpac.component';

describe('AgregarpacComponent', () => {
  let component: AgregarpacComponent;
  let fixture: ComponentFixture<AgregarpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
