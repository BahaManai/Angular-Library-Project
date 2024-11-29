import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksStatsComponent } from './books-stats/books-stats.component';


@NgModule({
  declarations: [
    BooksListComponent,
    BooksAddComponent,
    BooksEditComponent,
    BooksStatsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ]
})
export class BooksModule { }
