import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Configuración de la aplicación, incluye proveedores, interceptores, etc.
import { AppComponent } from './app/app.component'; // Componente raíz de la aplicación

// Arranca la aplicación Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => {
    // Captura y muestra errores que ocurran durante el arranque
    console.error('Error al arrancar la aplicación:', err);
  });
