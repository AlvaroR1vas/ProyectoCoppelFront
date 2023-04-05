import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaEliminacionComponent } from './poliza-eliminacion.component';

describe('PolizaEliminacionComponent', () => {
  let component: PolizaEliminacionComponent;
  let fixture: ComponentFixture<PolizaEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaEliminacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
