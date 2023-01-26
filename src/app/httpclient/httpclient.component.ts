import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {


  constructor(private service:BookService) { 
    this.service.getPosts().subscribe((res)=>{
     console.log('res :>> ', res);;
    })
  }

  ngOnInit(): void {
  }

}
