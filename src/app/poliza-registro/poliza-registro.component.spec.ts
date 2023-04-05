import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaRegistroComponent } from './poliza-registro.component';

describe('PolizaRegistroComponent', () => {
  let component: PolizaRegistroComponent;
  let fixture: ComponentFixture<PolizaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
