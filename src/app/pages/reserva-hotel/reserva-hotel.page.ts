import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <-- Importamos Ionic
import { CommonModule } from '@angular/common'; // <-- Importamos directivas comunes como *ngIf

@Component({
  selector: 'app-reserva-hotel',
  templateUrl: './reserva-hotel.page.html',
  styleUrls: ['./reserva-hotel.page.scss'],
  standalone: true, // <-- Asegúrate de que esto diga true
  imports: [IonicModule, CommonModule, ReactiveFormsModule] // <-- Agregamos los módulos clave aquí
})
export class ReservaHotelPage implements OnInit {
  reservaForm!: FormGroup;
  fechaMinima: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const hoy = new Date();
    const demana = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const anio = hoy.getFullYear();
    
    this.fechaMinima = `${anio}-${mes}-${demana}`;

    this.initForm();
  }

  initForm() {
    this.reservaForm = this.fb.group({
      nombreCliente: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required, this.validarFechaActual.bind(this)]],
      numeroNoches: ['', [Validators.required, Validators.min(1)]],
      numeroHabitacion: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{3}$')
      ]]
    });
  }

  validarFechaActual(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    
    const fechaSeleccionada = new Date(control.value).setHours(0,0,0,0);
    const fechaActual = new Date().setHours(0,0,0,0);

    return fechaSeleccionada < fechaActual ? { fechaInvalida: true } : null;
  }

  registrarReserva() {
    if (this.reservaForm.valid) {
      console.log('--- Datos de la Reserva Registrada ---');
      console.log('Cliente:', this.reservaForm.value.nombreCliente);
      console.log('Fecha de Ingreso:', this.reservaForm.value.fechaIngreso);
      console.log('Noches:', this.reservaForm.value.numeroNoches);
      console.log('Habitación N°:', this.reservaForm.value.numeroHabitacion);
      console.log('------------------------------------');
    }
  }
}