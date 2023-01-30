import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url='https://fakerestapi.azurewebsites.net//api/v1/Books/'
  constructor(private http: HttpClient) { }
  public getData():Observable<any> {
    return this.http.get(`${environment.baseURL}`);
  }
  public postdata(user:any):Observable<any> {
    return this.http.post(`${environment.baseURL}`,user);
  }
  public deleteData(id:any):Observable<any> {
    return this.http.delete(this.url + id);
  }
  public updateData(user:any):Observable<any>{
    return this.http.put(`${environment.baseURL}` + '/' + user.id , user);
  }
}
