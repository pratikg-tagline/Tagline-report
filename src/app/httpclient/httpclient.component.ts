import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss'],
})
export class HttpclientComponent implements OnInit {
  signupForm!: FormGroup;
  datas: any;
  userId: any;
  submit: string = 'Submit';
  submmited: boolean = false;

  constructor(private bookservice: BookService, private fb: FormBuilder) {
    this.bookservice.getData().subscribe((res) => {
      // console.log('res :>> ', res);
      this.datas = res;
    });
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      pageCount: this.fb.control('', Validators.required),
      excerpt: this.fb.control('', Validators.required),
      publishDate: this.fb.control('', Validators.required),
    });
  }
  get errorshow() {
    return this.signupForm.controls;
  }

  BookDelete(data: number) {
    this.bookservice.deleteData(data).subscribe((responce) => {
      this.datas.splice(data, 1);
    });
  }
  editdata(data: any) {
    this.userId = data.id;
    //  console.log('userId :>> ', this.userId);
    this.submit = 'Update';
    //  console.log(data.id);
    this.signupForm.patchValue(data);
    // console.log('data :>> ', data);
  }
  datashow(signupForm: any) {
    if (this.signupForm.invalid) {
      this.submmited = true;
      return;
    } else {
      this.submit = 'Submit';
      if (this.userId) {
        const index: number = this.datas.findIndex(
          (res: any) => res.id === this.userId
        );
        // console.log('index :>> ', this.userId);
        const data ={
          id:this.userId,
            ...this.signupForm.value,
          
        }
        this.bookservice.updateData(data).subscribe((res)=>{
          this.datas[index]={
            ...res,
          };
        })
        // console.log('this.datas :>> ', this.datas);
      } else {
        delete this.signupForm.value.publishDate;
        const data = {
          id: this.datas.length + 1,
          ...this.signupForm.value,
          pageCount: Number(this.signupForm.value.pageCount),
          publishDate: new Date(),
        };
        this.bookservice.postdata(data).subscribe((res) => {
          // console.log('resjfgj :>> ', res);;
          this.datas.unshift(res);
          //  console.log('data2 :>> ', data);
        });
      }
      this.userId = 0;
      this.signupForm.reset();
    }
  }
}
// delete this.signupForm.value.publishDate
//   const data = {
//     ...this.signupForm.value,
//     pageCount: Number(this.signupForm.value.pageCount),
//     publishDate: new Date()
//   }
//   this.bookservice.postdata(data).subscribe((res)=>{
//     // console.log('resjfgj :>> ', res);;
//     this.datas.unshift(data);
//     // console.log('data2 :>> ', data);

//    })
//   //  this.userId = 0;
//   //     this.signupForm.reset();
