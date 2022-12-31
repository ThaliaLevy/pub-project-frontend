import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBebidasComponent } from './cadastrar-bebidas.component';

describe('CadastrarBebidasComponent', () => {
  let component: CadastrarBebidasComponent;
  let fixture: ComponentFixture<CadastrarBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
