import { Component } from '@angular/core';


// Create angular application which will demonstrate the concept of string
//interpolation.
//To demonstrate the string interpolation we can create one characteristics in class as
//“Name” which should be assigned to some string as
//Name = “Marvellous”
//Now use this characteristics in html file using the concept of string interpolation as {{Name}}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';
  Name:string="Marvellous";
}
