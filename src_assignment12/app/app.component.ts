import { Component } from '@angular/core';


//12. Create the application which contains two components as First and second Display
//    specific text from both the component. Text of first component should be displayed in
//    Red colour and for second component use Blue colour.

//	Follow same steps as the above application. As we want to specify the colours we have to
//	write the colours specification in appropriate .css file of each component.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  header:string="Inside Root Component";
}
