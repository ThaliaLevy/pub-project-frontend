import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgendamentosComponent } from './formulario-agendamentos.component';

describe('FormularioAgendamentosComponent', () => {
  let component: FormularioAgendamentosComponent;
  let fixture: ComponentFixture<FormularioAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgendamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
