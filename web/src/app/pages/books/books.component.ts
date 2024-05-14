import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book, BookService } from '../../services/books/books.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink, NgFor, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent implements OnInit{
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooksFromJsonFile();
  }

  getBooksFromJsonFile(): void {
    this.bookService.getBooksFromJsonFile()
      .subscribe(books => this.books = books);
  }
}
