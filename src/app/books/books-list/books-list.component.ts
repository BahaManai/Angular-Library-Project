import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  books? :Book[];
  constructor(private bookService: BookService){}
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
