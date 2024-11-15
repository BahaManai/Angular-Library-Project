import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    new Book(1, "Power of habits", "...",  35),
    new Book( 2,  "The Slight age",  "Jeff Olsen", 40),
    new Book( 3,  "Atomic Habits 3",  "James Clear",  50)
  ];
  getBooks(){
    return this.books;
  }
  constructor() { }
}
