import { Component } from '@angular/core';


//13. Create angular application which contains one user defined function inside class. We
//    have to call that function using String interpolation.

//	Write one public function inside class named as fun() and call that function inside
//	{{ call }}.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Assignment';

  //user define function created here
  public fun()
  {
    this.title="Marvellous Infosystems";
    return this.title;
  }
}
