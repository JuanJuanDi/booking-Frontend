import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']  // Corregido 'styleUrl' a 'styleUrls'
})

export class BookingFormComponent {
  bookingForm: FormGroup;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success'; // Corregido 'succes' a 'success'

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    // Inicialización del formulario con validación
    this.bookingForm = this.fb.group({
      roomNumber: ['', Validators.required] // Campo obligatorio
    });
  }

  // Método para manejar el envío del formulario de reserva
  onSubmit(): void {
    // Verifica si el formulario es válido antes de enviar
    if (this.bookingForm.valid) {
      const roomNumber = this.bookingForm.value.roomNumber; // Obtiene el número de habitación del formulario

      // Llama al servicio de reserva para reservar la habitación
      this.bookingService.bookRoom(roomNumber).subscribe(response => {
        // Maneja la respuesta exitosa
        this.notificationMessage = 'Room booked successfully!';
        this.notificationType = 'success'; // Corregido 'succes' a 'success'
      }, error => {
        // Maneja el error
        this.notificationMessage = 'Failed to book room: ' + error.message;
        this.notificationType = 'error';
      });
    }
  }
}
