import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpacComponent } from './editarpac.component';

describe('EditarpacComponent', () => {
  let component: EditarpacComponent;
  let fixture: ComponentFixture<EditarpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
