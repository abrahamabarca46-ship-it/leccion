import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaHotelPage } from './reserva-hotel.page';

describe('ReservaHotelPage', () => {
  let component: ReservaHotelPage;
  let fixture: ComponentFixture<ReservaHotelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
