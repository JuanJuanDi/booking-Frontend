import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BookingService } from './services/booking.service';

@NgModule({
  declarations: [
    AppComponent,             // Componente raíz de la aplicación
    RoomListComponent,        // Componente para mostrar la lista de habitaciones
    BookingFormComponent,     // Componente para el formulario de reserva
    NotificationComponent     // Componente para mostrar notificaciones
    
  ],
  imports: [
    BrowserModule,            // Módulo necesario para la aplicación en el navegador
    AppRoutingModule,         // Módulo de enrutamiento de la aplicación
    HttpClientModule,         // Módulo para realizar solicitudes HTTP
    ReactiveFormsModule       // Módulo para trabajar con formularios reactivos
  ],
  providers: [BookingService], // Servicio para manejar la lógica de reservas
  bootstrap: [AppComponent]   // Componente raíz que se inicializa al arrancar la aplicación
})
export class AppModule { }
