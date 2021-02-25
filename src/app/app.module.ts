import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    RecipesListComponent,
    ShopCartComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
