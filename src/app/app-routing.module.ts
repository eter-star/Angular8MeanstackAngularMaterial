import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {ShopCartComponent} from './components/shop-cart/shop-cart.component';
import {FileUploadComponent} from './components/file-upload/file-upload.component';

import { AddBookComponent} from './components/add-book/add-book.component';
import { EditBookComponent} from './components/edit-book/edit-book.component';
import { BookListComponent} from './components/book-list/book-list.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'book-list' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'edit-recipe/:id', component: EditRecipeComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: 'file-upload', component: FileUploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
