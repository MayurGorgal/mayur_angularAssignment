import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent
{
 
  // @Input() decorator  
  // mydata mdhe parent ni send kelela data aala
  @Input() public mydata;

  /*
     jr aaplyala child to parent data pass karaycha asel tr aapn to directly pathvu shkat nahi
     tyasathi aaplyala event generate karava lagto
  */ 

  //ithe aapn EventEmitter cha object tayar kela ahe
  @Output() public myobj=new EventEmitter();

  //called when we press Child to Parent button
  public sendDateToParent()
  {
     //EvenetEmitter class chi emmit method hi data child to parent la send karayla use hote
     this.myobj.emit("Hello from child component");   
  }

}
