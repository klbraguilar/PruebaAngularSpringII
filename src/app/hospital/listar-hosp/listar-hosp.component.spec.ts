import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHospComponent } from './listar-hosp.component';

describe('ListarHospComponent', () => {
  let component: ListarHospComponent;
  let fixture: ComponentFixture<ListarHospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
