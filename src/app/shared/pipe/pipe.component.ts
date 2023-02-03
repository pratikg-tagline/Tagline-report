import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title: string = 'Title';
  email:string='Email'
  date:string='tdate'
  gender:string='gender'

  search:string=''
  array:any[] = [
    {
      title:'name',
      name:'Pratik',
      email:'Pratik@gmail.com',
      date:new Date(),
      gender:'male'
    },
    {
      title:'name',
      name:'Pratiksha',
      email:'Pratiksha@gmail.com',
      date:new Date(),
      gender:'female'
    },
    {
      title:'name',
      name:'Raj',
      email:'Raj@gmail.com',
      date:new Date(),
      gender:'male'
    },
    {
      title:'name',
      name:'Tejash',
      email:'Tejash@gmail.com',
      date:new Date(),
      gender:'male'
    },
    {
      title:'name',
      name:'Jaydeep',
      email:'Jaydeep@gmail.com',
      date:new Date(),
      gender:'male'
    },
    {
      title:'name',
      name:'Dharmik',
      email:'Dharmik@gmail.com',
      date:new Date(),
      gender:'male'
    },
    {
      title:'name',
      name:'priya',
      email:'Priya@gmail.com',
      date:new Date(),
      gender:'female'
    },
  ];
  dateToday!: string;
  name!: string;
  upperName : string = 'This is a Uppercase Pipes'
  lowerName :string = 'This is a Lowercase Pipes'
  titleName :string = 'This is a Titlecase Pipes'
  num1: number = 100;
  pi: number = 3.14159265359;
  num2:number = 1000000;
  percent : number=1.2563444;
  // totalstudent: any = new Observable((obj) => {
  //   obj.next(this.array.length);
  // });
  totalstudent = new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve(this.array.length);
}, 2000);
  });
  names: string[] = [
    'my name is pratik ghoghari',
   ' They speak English at work.',
    'I have no money at the moment.',
    'The train does not leave at 12 AM.',
  '  Does she drink coffee?',
    'I made a doll',

  ];
 country:any=['India','Pakistan','Bangladesh','USA']

  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Simplilearn"
   
    }

    getFormDate(date:any){
         return date;
    }
    add(value:any){
this.country.push(value);
    }
}
