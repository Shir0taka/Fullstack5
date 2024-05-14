import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth-user';

  constructor(private http: HttpClient) { }
  
  authUser(name: string, email: string, password: string) {
    const user = { name, email, password};

    return this.http.post(this.apiUrl, user);
  }
}
