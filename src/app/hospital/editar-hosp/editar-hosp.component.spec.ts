import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHospComponent } from './editar-hosp.component';

describe('EditarHospComponent', () => {
  let component: EditarHospComponent;
  let fixture: ComponentFixture<EditarHospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
