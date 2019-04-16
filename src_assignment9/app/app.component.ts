import { Component } from '@angular/core';

// Create angular application which add new component inside root component which
//  will display “Inside Sub Component”.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Inside Root Component";
}
