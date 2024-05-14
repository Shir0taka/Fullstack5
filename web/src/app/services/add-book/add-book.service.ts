import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddBookService {
  private apiUrl = 'http://127.0.0.1:8000/api/store-book';

  constructor(private http: HttpClient) { }

  addBook(name: string, author: string, pages: number, price: number) {
    const book = { name, author, pages, price };

    return this.http.post(this.apiUrl, book);
  }
}
