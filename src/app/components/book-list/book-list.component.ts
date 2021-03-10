import { Book } from './../../shared/book';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  BookData: any = [];
  dataSource: MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'book_isbn', 'book_title', 'book_author', 'book_publicationdate', 'action'];

  constructor(private bookApi: ApiService) {
    this.bookApi.GetBooks().subscribe(data => {
      this.BookData = data;
      this.dataSource = new MatTableDataSource<Book>(this.BookData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() {
  }

  deleteBook(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.bookApi.DeleteBook(e._id).subscribe();
    }
  }

}
