import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';

const routes: Routes = [
  {path:"", component: BooksListComponent},
  {path:"add", component: BooksAddComponent},
  {path:"edit/:id", component: BooksEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
