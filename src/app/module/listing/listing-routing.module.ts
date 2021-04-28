import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingHomeComponent } from './component/listing-home/listing-home.component';

const routes: Routes = [
  {
    path: '',
    component: ListingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
