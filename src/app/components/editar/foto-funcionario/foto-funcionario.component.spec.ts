import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoFuncionarioComponent } from './foto-funcionario.component';

describe('FotoFuncionarioComponent', () => {
  let component: FotoFuncionarioComponent;
  let fixture: ComponentFixture<FotoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
