import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaListadoComponent } from './poliza-listado.component';

describe('PolizaListadoComponent', () => {
  let component: PolizaListadoComponent;
  let fixture: ComponentFixture<PolizaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
