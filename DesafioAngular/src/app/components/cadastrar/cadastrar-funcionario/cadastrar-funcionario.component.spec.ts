import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncionarioComponent } from './cadastrar-funcionario.component';

describe('CadastrarFuncionarioComponent', () => {
  let component: CadastrarFuncionarioComponent;
  let fixture: ComponentFixture<CadastrarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
