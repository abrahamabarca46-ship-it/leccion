import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ReservaHotelPageRoutingModule } from './reserva-hotel-routing.module';
import { ReservaHotelPage } from './reserva-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaHotelPageRoutingModule,
    ReservaHotelPage // <-- Quitamos de declarations y lo ponemos AQUÍ como import
  ]
})
export class ReservaHotelPageModule {}