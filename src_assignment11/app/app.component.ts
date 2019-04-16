import { Component } from '@angular/core';

//11.Create Angular Application which contains two components and display the contents
//    of that two components after the root components. Expected output of our application should be

//  Inside Root component
//	Inside First Component
//	Inside Second component
//	Create new components using ng generate command and add its markups in	
//	app.component.html file.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  header:string="Inside Root Component"
}
