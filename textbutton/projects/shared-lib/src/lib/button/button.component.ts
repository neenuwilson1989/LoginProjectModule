import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button (click)="navigateToLogin()">Go to Login</button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  navigateToLogin() {
    window.location.href = 'http://localhost:4201/login';
  }
}
