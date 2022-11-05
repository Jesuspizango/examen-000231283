import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSolicitudCarComponent } from './report-solicitud-car.component';

describe('ReportSolicitudCarComponent', () => {
  let component: ReportSolicitudCarComponent;
  let fixture: ComponentFixture<ReportSolicitudCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSolicitudCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSolicitudCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
