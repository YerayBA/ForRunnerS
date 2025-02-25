import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojesComponenteComponent } from './relojes-componente.component';

describe('RelojesComponenteComponent', () => {
  let component: RelojesComponenteComponent;
  let fixture: ComponentFixture<RelojesComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojesComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojesComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
