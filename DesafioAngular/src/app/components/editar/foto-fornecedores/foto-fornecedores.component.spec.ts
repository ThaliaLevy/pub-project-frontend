import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoFornecedoresComponent } from './foto-fornecedores.component';

describe('FotoFornecedoresComponent', () => {
  let component: FotoFornecedoresComponent;
  let fixture: ComponentFixture<FotoFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
