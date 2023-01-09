import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEventosComponent } from './cadastrar-eventos.component';

describe('CadastrarEventosComponent', () => {
  let component: CadastrarEventosComponent;
  let fixture: ComponentFixture<CadastrarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
