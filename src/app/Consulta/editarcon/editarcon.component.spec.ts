import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarconComponent } from './editarcon.component';

describe('EditarconComponent', () => {
  let component: EditarconComponent;
  let fixture: ComponentFixture<EditarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
