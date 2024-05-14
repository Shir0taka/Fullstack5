import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:8000/api/books';
  private jsonUrl = 'books.json';
  
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBooksFromJsonFile(): Observable<Book[]> {
    return this.http.get<Book[]>(this.jsonUrl);
  }
}

export interface Book {
  id: number;
  name: string;
  author: string;
  pages: number;
  price: number;
}
