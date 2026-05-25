import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 1. Importamos el módulo global de Ionic
import { IonicModule } from '@ionic/angular'; 

import { ButtonPageRoutingModule } from './button-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // 2. ⚠️ ESTA LÍNEA ES CLAVE. Le dice a Angular que reconozca todas las etiquetas ion-xxx
    ButtonPageRoutingModule
  ],
  declarations: []
})
export class ButtonPageModule {}