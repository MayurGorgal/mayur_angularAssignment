//we are importing @angular/core package and we identify that package by name Component
import { Component } from '@angular/core';

//@ annotation is works as decoratives in angular
@Component({
  selector: 'app-root',//name of our component is app-root component
  templateUrl: './app.component.html',//our components HTML file Path
  styleUrls: ['./app.component.css']  //our components CSS file path
})

// we are exporting our class so that that can be used inside our componenet but not outside component
export class AppComponent 
{
  //characteristics
  title = 'FirstProject';
}

/*
  index.html:- entry point function for frontend
  main.ts   :- entry point function for backend
  
  e2e        :- end to end testing used for unit testing
  node_module:- all the packages which are required for our angular application are present in node_module directory.
  src        :- actual developmental code are written by developer here.
  package.json:- It contains the information about all the packages which are present inside node_module directory.
  package-lock.json:-It contains information about which package should used and which package should not used by developer. 
  angular.json:- main file of our angular project.all the settings of our project are present here. 
*/
