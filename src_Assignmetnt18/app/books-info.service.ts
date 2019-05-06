import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from 'IBooks';

@Injectable({
  providedIn: 'root'
})
export class BooksInfoService
{

  //created a service instance of HttpClient using dependency injection
  constructor(private http:HttpClient)
  {

  }

  //url to access from server
  private url:string="/assets/data/BooksInfo.json";
  
  //service which gets data from server
  public getBooksInfo():Observable<IBooks[]>
  {
    return this.http.get<IBooks[]>(this.url);
  }


}
