import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:8080/auth/login', { username, password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.tokenSubject.next(response.token);
        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.tokenSubject.asObservable();
  }
}
