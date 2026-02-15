import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardnav } from './dashboardnav';

describe('Dashboardnav', () => {
  let component: Dashboardnav;
  let fixture: ComponentFixture<Dashboardnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardnav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
