import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioActualizacionComponent } from './inventario-actualizacion.component';

describe('InventarioActualizacionComponent', () => {
  let component: InventarioActualizacionComponent;
  let fixture: ComponentFixture<InventarioActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioActualizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
