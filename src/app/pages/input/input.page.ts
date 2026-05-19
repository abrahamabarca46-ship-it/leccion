import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components-module';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ]
  })

export class InputPage implements OnInit {
  nombre: string = 'Fernando'; 
  usuario = { 
    email: '', 
    password: '' 
  }
  constructor() { } 
  
  ngOnInit() { 

  } 
  
  onSubmit(formulario: NgForm) { 
    console.log('submit'); 
    console.log(this.usuario); 
    console.log(formulario); 
  } 
}