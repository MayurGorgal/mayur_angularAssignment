import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompSucessDirective } from './comp-sucess.directive';
import { CompFailureDirective } from './comp-failure.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSucessDirective,
    CompFailureDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
