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
  
  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?")){
      this.bookService.deleteBook(id);
    //Methode 2 this.books = this.bookService.getBooks();
    }
  }

  //subscribe rxjs
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksEdited.subscribe(
      newBooks => this.books = newBooks
  )
  }
}
