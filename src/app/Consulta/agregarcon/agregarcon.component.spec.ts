import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarconComponent } from './agregarcon.component';

describe('AgregarconComponent', () => {
  let component: AgregarconComponent;
  let fixture: ComponentFixture<AgregarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
