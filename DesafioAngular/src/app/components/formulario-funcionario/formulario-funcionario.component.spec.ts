import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFuncionarioComponent } from './formulario-funcionario.component';

describe('FormularioFuncionarioComponent', () => {
  let component: FormularioFuncionarioComponent;
  let fixture: ComponentFixture<FormularioFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
