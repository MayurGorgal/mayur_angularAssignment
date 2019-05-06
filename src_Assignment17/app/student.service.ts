import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentdetail } from './IStudentDetail';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class StudentService 
{
  constructor(private http:HttpClient)
  {

  }

  public url:string="/assets/data/studentDetail.json";
  
  public getStudentDetails():Observable<IStudentdetail[]>
  {
     return this.http.get<IStudentdetail[]>(this.url);
  }

}
