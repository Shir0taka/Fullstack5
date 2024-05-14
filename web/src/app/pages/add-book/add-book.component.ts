import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../../services/add-book/add-book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit{
  bookName: string = '';
  bookAuthor: string = '';
  bookPages: number = 0;
  bookPrice: number = 0;

  responseRes: string = '';

  constructor(private addBookService: AddBookService) {}

  addNewBook() {
    if(this.bookName == '' || 
    this.bookAuthor == '' || 
    this.bookPages == 0 || 
    this.bookPrice == 0) {
      this.responseRes = 'Fields are empty!';
    } else {
      this.addBookService.addBook(this.bookName, this.bookAuthor, this.bookPages, this.bookPrice)
      .subscribe((response) => {
        console.log('Response received: ', response);
        this.responseRes = 'Book added successfully!';
      }, (error) => {
        console.log('Response lost: ', error);
        this.responseRes = 'Book failed to add!';   
      });
    }
  }

  ngOnInit(): void {
      
  }
}
