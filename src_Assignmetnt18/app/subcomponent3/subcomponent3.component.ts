import { Component, OnInit } from '@angular/core';
import { BooksInfoService } from '../books-info.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

   //creating empty array to store data recieved from service
   public batches=[];

   //injecting BooksInfoService class instance inside constructor
  constructor(private myservice:BooksInfoService)
  {

  }

   /*now to access data from server every component need to subscribe for that
     perticular service
    */

    //this method gets called only once for component in component lifecycle
    ngOnInit()
    {
      this.myservice.getBooksInfo()
      .subscribe(data=>this.batches=data);
    }

}
