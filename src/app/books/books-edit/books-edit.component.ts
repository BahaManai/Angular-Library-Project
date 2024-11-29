import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrl: './books-edit.component.css'
})
export class BooksEditComponent implements OnInit {
  book?: Book;

  constructor(
    private activeRoute: ActivatedRoute,
    private bookService: BookService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        //console.log(parametres['id']);
        
        if(this.bookService.getBookById(+parametres['id']) !== undefined){
          this.book = this.bookService.getBookById(+parametres['id']); //On a récupéré l'id de l'URL et on a appelé la méthode getBookById de service afin de récupérer l'objet book de cet ID 
          console.log(this.book);
        }
          
        else
          console.log("Le livre est introuvable");
      });
  }
  editBook(f: NgForm): void {
    this.bookService.updateBook(this.book!);
    this.router.navigate(['/books']);
  }
  
}
