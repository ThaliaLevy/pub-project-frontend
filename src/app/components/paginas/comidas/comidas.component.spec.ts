import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasComponent } from './comidas.component';

describe('ComidasComponent', () => {
  let component: ComidasComponent;
  let fixture: ComponentFixture<ComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
