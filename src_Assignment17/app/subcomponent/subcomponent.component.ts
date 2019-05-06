import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent
{

  public student_details=[];


  constructor(private obj:StudentService)
  {

  }
  
  public fetchData()
  {
    this.obj.getStudentDetails().subscribe(data=>this.student_details=data);
  }
  
}
