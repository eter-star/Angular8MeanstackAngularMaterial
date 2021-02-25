import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetRecipeForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  recipeForm: FormGroup;
  subjectArray: Subject[] = [];
  CategoryArrays: any = ['Soups', 'Salads', 'Deserts', 'Sandwiches/Wraps', 'Vegetarian', 'Cold Dish'];

  ngOnInit() {
    this.updateRecipeForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private recipeApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.recipeApi.GetRecipe(id).subscribe(data => {
      console.log(data.subjects)
      this.subjectArray = data.subjects;
      this.recipeForm = this.fb.group({
        recipe_name: [data.recipe_name, [Validators.required]],
        recipe_description: [data.recipe_description, [Validators.required]],
        recipe_category: [data.recipe_category, [Validators.required]]
      })
    })
  }

  /* Reactive book form */
  updateRecipeForm() {
    this.recipeForm = this.fb.group({
      recipe_name: ['', [Validators.required]],
      recipe_description: ['', [Validators.required]],
      recipe_category: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [this.subjectArray]
    })
  }
  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.recipeForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateRecipeForm() {
    console.log(this.recipeForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.recipeApi.UpdateRecipe(id, this.recipeForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/recipes-list'))
      });
    }
  }






}
