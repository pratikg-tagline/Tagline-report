import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Table } from '../common';

@Component({
  selector: 'app-report-formarray',
  templateUrl: './report-formarray.component.html',
  styleUrls: ['./report-formarray.component.scss']
})
export class ReportFormarrayComponent implements OnInit {
  // form = this.fb.group({
  //   fields: this.fb.array([])
  // });
  // get fields() {
  //   return this.form.get('fields') as FormArray;
  // }
  // addField() {
  //   this.fields.push(new FormControl(''));
  // }
  signupForm!: FormGroup;
  items!:FormArray;
  firstname: string = 'Firstname';
  lastname: string = 'Lastname';
  email: string = 'Email';
  firstnamerequired:string='Please Provide a Firstname '
  lastnamerequired:string='Please Provide a Lastname '
  emailrequired:string='Please Provide a Properly Formatted Email address '
  data:any
  array:Table[] = [
    {
      id: '1',
      firstname: 'pratik',
      lastname: 'ghoghari',
      email: 'pratik@gmail.com',
    },
   
  ];

  constructor(private fb:FormBuilder  ) { }
 
  ngOnInit(): void {
this.signupForm=this.fb.group({
  firstname: this.fb.control('', Validators.required),
  lastname: this.fb.control('', Validators.required),
  email: this.fb.control('', Validators.required),
  deladdress:new FormArray([])
})
  }
  proceedsave(){
    const data=this.signupForm.value
    this.array.push(data)
    console.log('this.sig :>> ', this.signupForm.value);
  }
  Addnewrow(){
this.items=this.signupForm.get("deladdress") as FormArray
this.items.push(this.Genrow())
console.log('genrow :>> ', this.items);
  }
  get deladdress(){
    return this.signupForm.get("deladdress") as FormArray
  }
  Genrow():FormGroup{
   
    return new FormGroup({
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      
    })
  }
  remove(index:any){
    this.items=this.signupForm.get("deladdress") as FormArray
    this.items.removeAt(index)
  }
  //formarray = new FormArray([new FormControl(''),new FormControl('')])
  get errorshow() {
    return this.signupForm.controls;
  }
  tableshow(signupForm: any){
    if (this.signupForm.invalid) {
      return;
    } else {
      this.array.push(signupForm);
      console.log('data :>> ', this.array);
  }
  }}
