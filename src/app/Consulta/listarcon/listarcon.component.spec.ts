import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarconComponent } from './listarcon.component';

describe('ListarconComponent', () => {
  let component: ListarconComponent;
  let fixture: ComponentFixture<ListarconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
