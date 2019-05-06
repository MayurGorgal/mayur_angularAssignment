import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';
import { Subcomponent3Component } from './subcomponent3/subcomponent3.component';
import { BooksInfoService } from './books-info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Subcomponent1Component,
    Subcomponent2Component,
    Subcomponent3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule//we need to add this import statement
  ],
  providers: [BooksInfoService]//added service name in providers
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
