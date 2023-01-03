import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoEventosComponent } from './foto-eventos.component';

describe('FotoEventosComponent', () => {
  let component: FotoEventosComponent;
  let fixture: ComponentFixture<FotoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
