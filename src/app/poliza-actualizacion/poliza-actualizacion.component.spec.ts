import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaActualizacionComponent } from './poliza-actualizacion.component';

describe('PolizaActualizacionComponent', () => {
  let component: PolizaActualizacionComponent;
  let fixture: ComponentFixture<PolizaActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaActualizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
