import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHospComponent } from './agregar-hosp.component';

describe('AgregarHospComponent', () => {
  let component: AgregarHospComponent;
  let fixture: ComponentFixture<AgregarHospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarHospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
