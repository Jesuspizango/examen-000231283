import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSolicitudCarComponent } from './register-solicitud-car.component';

describe('RegisterSolicitudCarComponent', () => {
  let component: RegisterSolicitudCarComponent;
  let fixture: ComponentFixture<RegisterSolicitudCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSolicitudCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSolicitudCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
