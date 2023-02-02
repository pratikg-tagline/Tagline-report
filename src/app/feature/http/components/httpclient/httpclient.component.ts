import { AfterContentInit, Component, OnInit } from '@angular/core';
import 'ngx-toastr/toastr';

import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, observable, Observer, Subscription } from 'rxjs';

import { NgIfContext } from '@angular/common';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/common';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';



@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss'],
})
export class HttpclientComponent implements OnInit {
  signupForm!: FormGroup;
  datas: any;
  booksData: any;
  userId: any;
  bookIndex!: number;
  formerror: string = '';
  forms: string = 'Forms:';
  submit: string = 'Submit';
  edit: string = 'Edit';
  delete: string = 'Delete';
  customeObservable: any 
  basicinfotmation: string = 'Enter Basic Information';
  bookdetails:string='Book Details';
  pleaseform: string = 'Please fill out this form.';
  title: string = 'Title';
  pleasefileform: string = 'Please fill this first';
  pagecount: string = 'PageCount';
  description: string = 'Description';
  excerpt: string = 'Excerpt';
  publishDate: string = 'PublishDate';
  submmited: boolean = false;
  deleteId!:number;
  pipe:string='Pipe Display'
 

 

  constructor(
    private bookservice: BookService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private activatedRoute: ActivatedRoute
  ) {this.booksData = this.activatedRoute.snapshot.data['datas']}

  ngOnInit(): void {
  
    this.signupForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),  
      pageCount: this.fb.control('', Validators.required),
      excerpt: this.fb.control('', Validators.required),
      publishDate: this.fb.control('', Validators.required),
    });
    
    // observable.subscribe((result: any) => console.log('object :>> ', result));

    // const obs =new Observable((observer)=>{
    //  console.log('startingobs :>> ', 'startingobs');

    // })
   this.getBookDetails();
  
    
  }
//   ngOnDestroy() {
//     this.customeObservable.unsubscribe();
// }
  get errorshow() {
    return this.signupForm.controls;
  }

  getBookDetails() {
    this.bookservice.getData().subscribe((res) => {
      this.datas = res;

      this.customeObservable = new Observable((observer: Observer<any>) => {
        observer.next(this.datas);
        // observer.next(1);
        // observer.next(2);
        // observer.next(3);
        // observer.complete();
        // return {unsubscribe() {}};
        
      });
       this.customeObservable.subscribe((data: Book) => {
        this.booksData = data;
      
      });
    });
  }
  deleteFind(i: number) {
    this.deleteId = i;
  }
  BookDelete() {
    this.bookservice.deleteData(this.deleteId).subscribe((responce) => {
      this.datas.splice(this.deleteId, 1);
      this.toastr.error('Delete data!');
    });
  }
  editdata(data: Book, index: number) {
    this.userId = data.id;

    this.submit = 'Update';
    this.bookIndex = index;

    this.signupForm.patchValue(data);
  }
  datashow(signupForm:any) {
    if (this.signupForm.invalid) {
      this.formerror = 'Please field form correctly';
      this.submmited = true;
      return;
    } else {
      this.formerror = '';
      this.submit = 'Submit';
      if (this.userId) {
        const data = {
          id: this.userId,
          ...this.signupForm.value,
        };
        this.bookservice.updateData(data).subscribe(
          (res) => {
            this.datas[this.bookIndex] = {
              ...res,
            };
          },
          (err) => console.log('err >> ', err)
        );
      } else {
        delete this.signupForm.value.publishDate;
        const data = {
          id: this.datas.length + 1,
          ...this.signupForm.value,
          pageCount: Number(this.signupForm.value.pageCount),
          publishDate: new Date(),
        };
        this.bookservice.postdata(data).subscribe(
          (res) => {
            this.datas.unshift(res);
          },
          (err) => this.toastr.error(err.message)
        );
      }
      this.userId = 0;
      this.signupForm.reset();
    }
  }
}
