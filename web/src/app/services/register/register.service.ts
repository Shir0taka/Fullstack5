import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private apiUrl = 'http://127.0.0.1:8000/api/reg-user';

  constructor(private http: HttpClient) { }
  
  regUser(name: string, email: string, password: string) {
    const user = { name, email, password };

    return this.http.post(this.apiUrl, user);
  }
}
