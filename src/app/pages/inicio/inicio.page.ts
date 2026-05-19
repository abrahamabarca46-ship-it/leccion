import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


//crear una interface para definir propiedades que el componente lista va a tener
interface Componente { 
  icon: string; 
  name: string; 
  redirectTo: string; 
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterLink
  ]

})

export class InicioPage implements OnInit {

  //crear nuevo listado

  //componentes: any^[] = [];
  componentes: Componente[] = [] = [
    {
      icon: 'american-football-outline', 
      name: 'Action Sheet', 
      redirectTo: '/action-sheet'
    },
    
    { 
      icon: 'logo-circle-outline', 
      name: 'Alert', 
      redirectTo: '/alert' },
      {
    icon: 'calendar-outline', 
    name: 'Reserva de Hotel',
    redirectTo: '/reserva-hotel'
  }
  ];

  constructor() { }
  
  ngOnInit() {
    
  }

}