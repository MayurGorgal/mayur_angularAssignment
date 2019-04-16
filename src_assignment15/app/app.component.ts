import { Component } from '@angular/core';


//15. Create angular application which one button. When user press that button we have
//    to display some text as “Button Clicked” otherwise display “Marvellous Infosystems”.

//	As we want to handle event of button click we have to use this tag as (click)= “fun()”.
//	In this case inside the fun function we will change the text.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = "marvellous Infosystems";

  public fun()
  {
    this.title="Button Clicked";
  }

}
