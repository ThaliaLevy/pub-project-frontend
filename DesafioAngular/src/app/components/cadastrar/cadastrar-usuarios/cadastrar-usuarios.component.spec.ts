import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuariosComponent } from './cadastrar-usuarios.component';

describe('CadastrarUsuariosComponent', () => {
  let component: CadastrarUsuariosComponent;
  let fixture: ComponentFixture<CadastrarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
