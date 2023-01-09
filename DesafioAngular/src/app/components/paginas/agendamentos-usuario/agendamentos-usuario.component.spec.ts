import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosUsuarioComponent } from './agendamentos-usuario.component';

describe('AgendamentosUsuarioComponent', () => {
  let component: AgendamentosUsuarioComponent;
  let fixture: ComponentFixture<AgendamentosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
