import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagline-report',
  templateUrl: './tagline-report.component.html',
  styleUrls: ['./tagline-report.component.scss']
})
export class TaglineReportComponent implements OnInit {
  taglinereport!:FormGroup
  items!:FormArray
  cerrmsg : string='Please fill this first';
  cerror!: string;
  perror!: string;
  paerror!: string;
  qerror!: string;
  nerror!: string;
  dailyupdate:string='Daily Update'
  updatefor:string='Updates for'
  requestforleave:string='Request for Leave'
  line:string=`I'm here to write daily update`
  clientname:string='Client Name' 
  projectname:string='Project Name'
  completed:string='List Of Completed Tasks :'
  progress:string='List Of Progress Tasks :'
  pandding:string='List Of Pandding Tasks :'
  queires:string='List Of Queires Tasks :'
  notes:string='List Of Notes Tasks : :'
  yourname:string='Your Name :'
  hi:string='Hi,'
  followingupdates:string='Following are the updates for '
  ason:string=' as on '
  thanks:string='Thanks,'
  lastline:string='Please check with the latest updates and let us know your thoughts for the same.'

  Months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];  
  fullDate: any = new Date();
  Date: string = this.fullDate.getDate();
  Month: string = this.Months[this.fullDate.getMonth()];
  Year: string = this.fullDate.getFullYear(); 
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.taglinereport=this.fb.group({
      clientname: this.fb.control('', Validators.required),
      projectname: this.fb.control('', Validators.required),
      completedTask: this.fb.array([this.formControl()]),
      progresstask:this.fb.array([this.formControl()]),
      panddingtask:this.fb.array([this.formControl()]),
      queriestask:this.fb.array([this.formControl()]),
      notestask:this.fb.array([this.formControl()]),
      yourname: this.fb.control('', Validators.required)
      })
  }
  copyText(){
const text =(document.getElementById('copytext')as HTMLDivElement).innerText
navigator.clipboard.writeText(text)
  }
  formControl(){
    return this.fb.control(null, [Validators.required]);
  }
  get completedTask() {
    return this.taglinereport.get('completedTask') as FormArray;
  }
  get progresstask() {
    return this.taglinereport.get('progresstask') as FormArray;
  }
  get panddingtask() {
    return this.taglinereport.get('panddingtask') as FormArray;
  }
  
  get queriestask() {
    return this.taglinereport.get('queriestask') as FormArray;
  }
  get notestask() {
    return this.taglinereport.get('notestask') as FormArray;
  }
  get formControls(){
    return this.taglinereport.controls
  }
  
  Addnewrow(formarray:string){
    switch(formarray){  
       case 'completedTask':
      if(this.completedTask.invalid) {
        this.cerror = this.cerrmsg;
       }  else{
        this.cerror='';
        this.completedTask.push(this.formControl())
      };
       break;
       case 'progresstask':
       if(this.progresstask.invalid){
        this.perror = this.cerrmsg
      }else{
        this.cerror='';
        this.progresstask.push(this.formControl())
      }
       break;
       case 'panddingtask':
       if(this.panddingtask.invalid){this.paerror = this.cerrmsg}
       else{
        this.cerror='';
        this.panddingtask.push(this.formControl())
       }
       break;
       case 'queriestask':
       if(this.queriestask.invalid) {(this.qerror = this.cerrmsg)}
       else{
        this.cerror='';
        this.queriestask.push(this.formControl())
       }
       break;
       case 'notestask':
       
       if(this.notestask.invalid) {this.nerror = this.cerrmsg}
       else{
        this.cerror='';
        this.notestask.push(this.formControl())
       }
       break;
    }
    // this.items=this.taglinereport.get("completedTask") as FormArray
    // this.items=this.taglinereport.get("progresstask") as FormArray
    // //console.log('object :>> ', this.formControls['completedTask'].value);
    // this.items.push(this.formControl())
    // //console.log('genrow :>> ', this.items);
      }
  removeTask(array:any ,index:any) {
        array.removeAt(index); 
        
      }
}
