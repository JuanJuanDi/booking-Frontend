import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

// Definición de las rutas de la aplicación
const routes: Routes = [
  { path: '', component: RoomListComponent }, // Ruta raíz que muestra la lista de habitaciones
  { path: 'book', component: BookingFormComponent } // Ruta para el formulario de reserva
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa el módulo de enrutamiento con las rutas definidas
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
