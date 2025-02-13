import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasComponenteComponent } from './carreras-componente.component';

describe('CarrerasComponenteComponent', () => {
  let component: CarrerasComponenteComponent;
  let fixture: ComponentFixture<CarrerasComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrerasComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrerasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
