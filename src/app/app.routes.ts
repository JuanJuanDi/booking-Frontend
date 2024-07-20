import { Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: '', component: RoomListComponent }, // Ruta para la página principal que muestra la lista de habitaciones
  { path: 'book', component: BookingFormComponent } // Ruta para la página del formulario de reserva
];
