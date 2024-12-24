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
  
  deleteBook(id : string){
    if(confirm("Êtes-vous sûre de vouloir supprimer ce livre?")){
      /*this.bookService.deleteBook(id); */
    //Methode 2 this.books = this.bookService.getBooks();
    this.bookService.deleteBook(id).subscribe(
      bookDeleted => this.books = this.books?.filter(book=>book!.id !== bookDeleted.id)
    )
    }
  }

  //subscribe rxjs
  ngOnInit(): void {
    /*this.books = this.bookService.getBooks();
    this.bookService.booksEdited.subscribe(
      newBooks => this.books = newBooks
  )*/
      this.bookService.getBooks().subscribe(
        books => this.books = books
      );
  }
}
