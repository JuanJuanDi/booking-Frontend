import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})

export class RoomListComponent implements OnInit{
  rooms: any[] = [];

  constructor(private bookingService: BookingService){}

  ngOnInit(): void {
    this.fetchRooms();
  }

  //Obtener habitaciones del servicio
  fetchRooms(): void{
    this.bookingService.getRooms().subscribe((data: any[]) => {
      this.rooms = data;
    });
  }

  //Manejar la aacion de reserver la haabitacion
  bookRoom(roomNumber: number): void{
    this.bookingService.bookRoom(roomNumber).subscribe(response => {
      alert('Room booked successfully!');
      this.fetchRooms(); //actualiza la lista de habitaciones
    }, error => {
      alert('Failed to book room: ' + error.message);
    });
  }
}
