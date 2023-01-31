import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { AuthserviceService } from '../service/authservice.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AccesstokenInterceptor implements HttpInterceptor {
 

  constructor(private authserviceService :AuthserviceService , private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request=request.clone({
      // setHeaders:{'access-token':`${this.authserviceService.accessToken}`}
      setHeaders:{Token:'pratik ghoghari'}
    })
    return next.handle(request).pipe(
      map((res)=>{
        console.log('Passed through the interceptor in response');
        return res;
      }),
      catchError((error:HttpErrorResponse)=>{
        let errorMsg ='';
        if(error.error instanceof ErrorEvent){
        console.log('This is the client side error');
        errorMsg = `Error : ${error.error.message}`;
        }else{
          console.log('This is the server side error');
          this.toastr.error('This is the server side error','Error');
          errorMsg =`Error Code : ${error.status}, Message:${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    )
  }
}
