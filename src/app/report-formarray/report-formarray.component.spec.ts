import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFormarrayComponent } from './report-formarray.component';

describe('ReportFormarrayComponent', () => {
  let component: ReportFormarrayComponent;
  let fixture: ComponentFixture<ReportFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFormarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
