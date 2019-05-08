import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmform',
  templateUrl: './addmform.component.html',
  styleUrls: ['./addmform.component.css']
})
export class AddmformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public submitData(value)
  {
    console.log(value) 
  }
}
