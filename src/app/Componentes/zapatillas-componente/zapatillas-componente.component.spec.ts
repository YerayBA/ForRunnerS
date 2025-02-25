import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillasComponenteComponent } from './zapatillas-componente.component';

describe('ZapatillasComponenteComponent', () => {
  let component: ZapatillasComponenteComponent;
  let fixture: ComponentFixture<ZapatillasComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapatillasComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapatillasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
