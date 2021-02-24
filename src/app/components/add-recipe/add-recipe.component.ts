import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Subject} from '../add-student/add-student.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  recipeForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private recipeApi: ApiService
  ) { }

  ngOnInit() {
    this.submitBookForm();
  }

  /* Reactive book form */
  submitBookForm() {
    this.recipeForm = this.fb.group({
      recipe_name: ['', [Validators.required]],
      recipe_description: ['', [Validators.required]]
    });
  }


  /* Submit book */
  submitRecipeForm() {
    if (this.recipeForm.valid) {
      this.recipeApi.AddRecipe(this.recipeForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }

}
