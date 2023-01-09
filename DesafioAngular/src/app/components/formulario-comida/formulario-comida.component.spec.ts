import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComidaComponent } from './formulario-comida.component';

describe('FormularioComidaComponent', () => {
  let component: FormularioComidaComponent;
  let fixture: ComponentFixture<FormularioComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
