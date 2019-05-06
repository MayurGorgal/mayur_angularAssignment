import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    SubcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //add import statement hete
  ],
  providers: [StudentService], //add service name here
  bootstrap: [AppComponent]
})
export class AppModule { }
