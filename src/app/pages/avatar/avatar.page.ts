import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonAvatar, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,    // <-- Agrega este
  IonBackButton  // <-- Agrega este
} from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonAvatar, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons,    // <-- Regístralo aquí
    IonBackButton  // <-- Regístralo aquí
  ]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}