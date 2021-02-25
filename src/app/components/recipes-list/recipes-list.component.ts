import {Recipe} from './../../shared/recipe';
import {ApiService} from './../../shared/api.service';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  RecipeData: any = [];
  dataSource: MatTableDataSource<Recipe>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'recipe_name', 'recipe_description', 'recipe_category', 'tags', 'action'];

  constructor(private recipeApi: ApiService) {
    this.recipeApi.GetRecipes().subscribe(data => {
      this.RecipeData = data;
      this.dataSource = new MatTableDataSource<Recipe>(this.RecipeData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {
  }

  deleteRecipe(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.recipeApi.DeleteRecipe(e._id).subscribe();
    }
  }

}
