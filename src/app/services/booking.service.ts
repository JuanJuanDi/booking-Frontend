import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:4200/api'; // URL de la API del backend

  constructor(private http: HttpClient) {}

  // Obtener la lista de habitaciones disponibles
  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rooms`);
  }

  // Reservar una habitación
  bookRoom(roomNumber: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, { roomNumber });
  }
}

