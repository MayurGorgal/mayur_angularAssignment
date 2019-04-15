import { Component } from '@angular/core';

//Create Angular application which will Display Header as “Marvellous Infosystems”
//and subheader as “Educating for better tomorrow”.
//use inline html contents.	

@Component({
  selector: 'app-root',
  template: `<h1>{{header}}</h1>
             <h2>{{subheader}}</h2>
            `,
  styles: ['./app.component.css']
})
export class AppComponent 
{
  header:string="Marvellous Infosystems";
  subheader:string="Educating for better tomorrow";
}
