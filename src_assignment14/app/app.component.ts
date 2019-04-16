import { Component } from '@angular/core';

//14. Create application which display length of the string which is characteristics of the
//class as well as we have to convert that string into upper case.
//To solve this question we can use length property and ToUpperCase() function inside sting
//interpolation.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous';
}
