import { Component, OnInit } from '@angular/core';


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
  totalstudent = new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve(this.array.length);
}, 2000);
  });
 

  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Simplilearn"
   
    }

    getFormDate(date:any){
         return date;
    }
}
