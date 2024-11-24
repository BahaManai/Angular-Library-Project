import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    new Book(1, "Power of habits", "Jonathan Joestar",  35),
    new Book( 2,  "The Slight age",  "Jeff Olsen", 40),
    new Book( 3,  "Atomic Habits 3",  "James Clear",  50)
  ];

  constructor() { }

  getBooks(){
    return [...this.books];
  }
  
  addBook(title:string, author:string, price:number){
    const newBook = new Book(
      this.books[this.books.length -1].id, title, author, price
    );
    this.books = [...this.books, newBook];
  }
}
