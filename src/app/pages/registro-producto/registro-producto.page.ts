import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular'; // 👈 Inyectamos AlertController

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.page.html',
  styleUrls: ['./registro-producto.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule, 
    ReactiveFormsModule
  ]
})
export class RegistroProductoPage implements OnInit {
  productoForm!: FormGroup;

  // Pasamos el alertController en el constructor
  constructor(
    private fb: FormBuilder,
    private alertController: AlertController 
  ) { }

  ngOnInit() {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0.01)]], 
      stock: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      codigo: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]] 
    });
  }

  // Agregamos async porque la alerta requiere esperar a que se renderice (await)
  async guardarProducto() {
    console.log('--- Intentando guardar producto ---');
    
    if (this.productoForm.valid) {
      // 1. Imprime en consola (Cumple rúbrica)
      console.log('¡Guardado Exitosamente!');
      console.log('Datos:', this.productoForm.value);

      // 2. Lanza la alerta visual en la pantalla del celular
      const alert = await this.alertController.create({
        header: 'Éxito',
        subHeader: 'Sistema de Inventario',
        message: '¡El producto se guardó exitosamente!',
        buttons: ['OK']
      });

      await alert.present();

      // Opcional: Limpiar el formulario después de guardar
      this.productoForm.reset();
      
    } else {
      console.log('Formulario inválido. Verifica las alertas en rojo.');
    }
  }
}