import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from 'src/app/book.service';

@Injectable({
  providedIn: 'root'
})
export class AccessresolverResolver implements Resolve<boolean> {

  constructor( private bookService: BookService ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.bookService.getData();
  }
}
