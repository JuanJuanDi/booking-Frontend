import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})

export class BookingFormComponent {
  bookingForm: FormGroup;
  notificationMessage: string = '';
  notificationType: 'succes' | 'error' = 'succes';

  constructor(private fb: FormBuilder, private bookingService: BookingService){
    this.bookingForm = this.fb.group({
      roomNumber: ['', Validators.required]
    });
  }

  //Enviar el formulario de reserva
  onSubmit(): void{
    if(this.bookingForm.valid){
      const roomNumber = this.bookingForm.value.roomNumber;
      this.bookingService.bookRoom(roomNumber).subscribe(response => {
        this.notificationMessage = 'Room bookes successfully!';
        this.notificationType = 'succes'
      }, error => {
        this.notificationMessage = 'Failed to book room: ' + error.message;
        this.notificationType = 'error';
      });
    }
  }
}
