import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasComponente } from './carreras-componente.component';

describe('CarrerasComponenteComponent', () => {
  let component: CarrerasComponente;
  let fixture: ComponentFixture<CarrerasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrerasComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrerasComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
