import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']  // Asegúrate de que el archivo CSS esté bien enlazado
})
export class NotificationComponent {
  @Input() message: string = ''; // Mensaje que se mostrará en la notificación
  @Input() type: 'success' | 'error' = 'success'; // Tipo de notificación: 'success' o 'error'

  // Devuelve la clase CSS correspondiente basada en el tipo de notificación
  getNotificationClass(): string {
    return this.type === 'success' ? 'notification-success' : 'notification-error';
  }
}

