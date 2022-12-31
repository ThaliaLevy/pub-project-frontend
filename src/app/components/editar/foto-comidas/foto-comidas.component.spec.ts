import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoComidasComponent } from './foto-comidas.component';

describe('FotoComidasComponent', () => {
  let component: FotoComidasComponent;
  let fixture: ComponentFixture<FotoComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
