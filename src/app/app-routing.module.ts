import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {ShopCartComponent} from './components/shop-cart/shop-cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'shop-cart', component: ShopCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
