import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';

  getNotificationClass(): string {
    return this.type === 'success' ? 'notification-success' : 'notification-error';
  }
}
