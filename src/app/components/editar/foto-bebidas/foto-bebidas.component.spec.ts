import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoBebidasComponent } from './foto-bebidas.component';

describe('FotoBebidasComponent', () => {
  let component: FotoBebidasComponent;
  let fixture: ComponentFixture<FotoBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
