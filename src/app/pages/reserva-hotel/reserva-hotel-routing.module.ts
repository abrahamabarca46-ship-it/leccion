import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaHotelPage } from './reserva-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaHotelPageRoutingModule {}
