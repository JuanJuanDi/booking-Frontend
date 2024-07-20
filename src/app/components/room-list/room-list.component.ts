import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']  // Asegúrate de que el archivo CSS esté bien enlazado
})
export class RoomListComponent implements OnInit {
  rooms: any[] = [];  // Lista de habitaciones disponibles

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchRooms();  // Obtener habitaciones cuando el componente se inicialice
  }

  // Obtener habitaciones del servicio
  fetchRooms(): void {
    this.bookingService.getRooms().subscribe((data: any[]) => {
      this.rooms = data;  // Actualizar la lista de habitaciones
    });
  }

  // Manejar la acción de reservar una habitación
  bookRoom(roomNumber: number): void {
    this.bookingService.bookRoom(roomNumber).subscribe(
      response => {
        alert('Room booked successfully!');
        this.fetchRooms();  // Actualizar la lista de habitaciones
      },
      error => {
        alert('Failed to book room: ' + error.message);
      }
    );
  }
}

