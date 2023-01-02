import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFornecedoresComponent } from './cadastrar-fornecedores.component';

describe('CadastrarFornecedoresComponent', () => {
  let component: CadastrarFornecedoresComponent;
  let fixture: ComponentFixture<CadastrarFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
