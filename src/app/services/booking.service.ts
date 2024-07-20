import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http//localhost:3000/api'; // url de la api backend

  constructor( private http: HttpClient ) { }

  //Obtener la lista de habitaciones disponibles
  getRooms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rooms`);
  }

  //Reservar una habitacion
  bookRoom(roomNumber: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/book`, { roomNumber });
  }
}
