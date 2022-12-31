import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComidasComponent } from './cadastrar-comidas.component';

describe('CadastrarComidasComponent', () => {
  let component: CadastrarComidasComponent;
  let fixture: ComponentFixture<CadastrarComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
