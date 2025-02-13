import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarComponent } from './formulario-recuperar.component';

describe('FormularioRecuperarComponent', () => {
  let component: FormularioRecuperarComponent;
  let fixture: ComponentFixture<FormularioRecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
