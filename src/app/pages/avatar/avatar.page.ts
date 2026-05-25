import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonAvatar, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar 
} from '@ionic/angular/standalone'; // Importaciones individuales de la guía

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'], // Enlazado a tu archivo scss personalizado
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonAvatar, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar
  ]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}