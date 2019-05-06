import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';
import { Subcomponent3Component } from './subcomponent3/subcomponent3.component';

const routes: Routes = 
[
  {path:'operatingsystem',component:Subcomponent1Component},
  {path:'programminglanguage',component:Subcomponent2Component},
  {path:'database',component:Subcomponent3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
