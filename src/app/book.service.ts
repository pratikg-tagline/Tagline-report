import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }
}
