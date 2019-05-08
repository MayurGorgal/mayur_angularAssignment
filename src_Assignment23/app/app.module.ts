import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//we need to import FormModule
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AddmformComponent } from './addmform/addmform.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
