import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas definidas para la aplicación

// Configuración de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // Configura el cambio de detección de zonas para la aplicación.
    // La opción `eventCoalescing` ayuda a agrupar cambios de eventos para mejorar el rendimiento.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Proporciona el enrutador de Angular con las rutas definidas.
    provideRouter(routes)
  ]
};
