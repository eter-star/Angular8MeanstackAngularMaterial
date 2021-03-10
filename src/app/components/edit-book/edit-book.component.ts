import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetBookForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  bookForm: FormGroup;
  subjectArray: Subject[] = [];

  ngOnInit() {
    this.updateBookForm();
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private bookApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bookApi.GetBook(id).subscribe(data => {
      console.log(data.subjects)
      this.subjectArray = data.subjects;
      this.bookForm = this.fb.group({
        book_isbn: [data.book_isbn, [Validators.required]],
        book_title: [data.book_title, [Validators.required]],
        book_author: [data.book_author, [Validators.required]],
        book_publicationdate: [data.book_publicationdate, [Validators.required]]
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.bookForm = this.fb.group({
      book_isbn: ['', [Validators.required]],
      book_title: ['', [Validators.required]],
      book_author: ['', [Validators.required]],
      book_publicationdate: ['', [Validators.required]]
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

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.bookForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.bookForm.controls[controlName].hasError(errorName);
  }


  /* Update book */
  updateBooksForm() {
    console.log(this.bookForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.bookApi.UpdateBook(id, this.bookForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/book-list'))
      });
    }
  }




}
