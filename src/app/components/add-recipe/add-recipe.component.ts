import {Router} from '@angular/router';
import {Component, OnInit, ViewChild, NgZone, ElementRef} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ApiService} from './../../shared/api.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Subject} from '../add-student/add-student.component';
import { HttpClient } from '@angular/common/http';

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
  @ViewChild('chipList', {static: true}) chipList;
  @ViewChild('resetRecipeForm', {static: true}) myNgForm;
  @ViewChild('fileInput', {static: true}) fileInput: ElementRef;
  fileAttr = 'Choose File';
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  recipeForm: FormGroup;
  subjectArray: Subject[] = [];
  CategoryArrays: any = ['Soups', 'Salads', 'Deserts', 'Sandwiches/Wraps', 'Vegetarian', 'Cold Dish'];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private recipeApi: ApiService,
    private http: HttpClient
  ) {
  };

  ngOnInit() {
    this.submitBookForm();
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  /* Reactive book form */
  submitBookForm() {
    this.recipeForm = this.fb.group({
      recipe_name: ['', [Validators.required]],
      recipe_description: ['', [Validators.required]],
      recipe_category: ['', [Validators.required]]
    });
  }


  /* Submit book */
  submitRecipeForm() {
    if (this.recipeForm.valid) {
      this.recipeApi.AddRecipe(this.recipeForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/recipes-list'));
      });
    }
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.recipeForm.controls[controlName].hasError(errorName);
  };


  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({name: value.trim()});
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
}
