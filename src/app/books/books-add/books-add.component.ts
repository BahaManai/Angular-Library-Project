import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrl: './books-add.component.css'
})
export class BooksAddComponent {
  constructor(private bookService: BookService,
              private router : Router){}
  
  addBook(f: NgForm){
    /* this.bookService.addBook(f.value.title, f.value.author, +f.value.price);
    this.router.navigate(['/books']);
    console.log(f); */
    this.bookService.addBook(f.value.title, f.value.author, +f.value.price).subscribe(
      book => this.router.navigate(['/books'])
    );
  }
}
