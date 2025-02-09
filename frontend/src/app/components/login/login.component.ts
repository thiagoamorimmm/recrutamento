import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input [(ngModel)]="username" placeholder="Usuário">
      <input type="password" [(ngModel)]="password" placeholder="Senha">
      <button (click)="login()">Entrar</button>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password);
  }
}
