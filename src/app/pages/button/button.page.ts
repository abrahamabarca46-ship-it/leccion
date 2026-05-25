import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  // Solo importamos los componentes de Ionic que usamos en esta lista limpia
  IonContent, 
  IonButton, 
  IonButtons, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonIcon,
  IonBackButton,
  IonMenuButton
} from '@ionic/angular/standalone'; // Librería independiente componente por componente
import { addIcons } from 'ionicons';
import { 
  create, 
  ellipsisHorizontal, 
  helpCircle, 
  personCircle, 
  search, 
  star 
} from 'ionicons/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styles: [``], // Evita el error por el archivo .css inexistente
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    // Declaramos explícitamente los componentes que debe reconocer Angular en el HTML
    IonContent, 
    IonButton, 
    IonButtons, 
    IonTitle, 
    IonToolbar,
    IonCard,
    IonIcon,
    IonBackButton,
    IonMenuButton
  ]
})
export class ButtonPage implements OnInit {

  constructor() {
    // Registro de los iconos para las tarjetas
    addIcons({ 
      create, 
      'ellipsis-horizontal': ellipsisHorizontal, 
      'help-circle': helpCircle, 
      'person-circle': personCircle, 
      search, 
      star 
    });
  }

  ngOnInit() {
  }

}