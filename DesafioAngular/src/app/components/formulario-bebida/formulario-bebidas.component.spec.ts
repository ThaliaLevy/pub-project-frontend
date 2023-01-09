import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBebidasComponent } from './formulario-bebidas.component';

describe('FormularioBebidasComponent', () => {
  let component: FormularioBebidasComponent;
  let fixture: ComponentFixture<FormularioBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
