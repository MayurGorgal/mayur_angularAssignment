import { Component } from '@angular/core';
//Create application which will display one textfield and one static text “Marvellous
//  Infosystems” on page. Colour of that textfield should be blue.
// Same as the inline html we have to use the inline css contents in app.component.ts file.
@Component({
  selector: 'app-root',
  template: `
              <h1>Marvellous Infosystems</h1>
              <input type="text">
            `,
  styles: [`
                input[type=text]
                {
                  background-color:blue
                }
             `]
})
export class AppComponent {
  title = 'Assignment';
}
