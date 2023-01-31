import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taglinenavbar',
  templateUrl: './taglinenavbar.component.html',
  styleUrls: ['./taglinenavbar.component.scss']
})
export class TaglinenavbarComponent implements OnInit {
  dailyupdate:string='Daily Update'
  updatefor:string='Updates for'
  requestforleave:string='Request for Leave'
  line:string=`I'm here to write daily update`
  constructor() { }

  ngOnInit(): void {
  }

}
