import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title: string = 'Title';
  email:string='Email'
  tdate:string='tdate'
  gender:string='gender'

  search:string=''
  array:any[] = [
    {
      title:'name',
      name:'pratik',
      email:'pratik@gmail.com',
      tdate:new Date('11-11-2019'),
      gender:'male'
    },
    {
      title:'name',
      name:'pratiksha',
      email:'pratiksha@gmail.com',
      tdate:new Date('11-08-2019'),
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
  date : Date =new Date()

  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.name = "Simplilearn"
   
    }

    getFormDate(date:any){
         return date;
    }
}
