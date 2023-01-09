import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComidasComponent } from './editar-comidas.component';

describe('EditarComidasComponent', () => {
  let component: EditarComidasComponent;
  let fixture: ComponentFixture<EditarComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
