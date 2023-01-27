import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
  constructor(private http: HttpClient) { }
  public getData() {
    return this.http.get(`${environment.baseURL}`);
  }
  public postdata(user:any) {
    return this.http.post(`${environment.baseURL}`,user);
  }
  public deleteData(id:any) {
    return this.http.delete(`${environment.baseURL}` + '/'+ id);
  }
  public updateData(user:any){
    return this.http.put(`${environment.baseURL}` + '/' + user.id , user);
  }
}
