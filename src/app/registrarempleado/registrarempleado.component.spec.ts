import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarempleadoComponent } from './registrarempleado.component';

describe('RegistrarempleadoComponent', () => {
  let component: RegistrarempleadoComponent;
  let fixture: ComponentFixture<RegistrarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
