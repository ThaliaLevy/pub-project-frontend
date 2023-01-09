import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBebidasComponent } from './editar-bebidas.component';

describe('EditarBebidasComponent', () => {
  let component: EditarBebidasComponent;
  let fixture: ComponentFixture<EditarBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
