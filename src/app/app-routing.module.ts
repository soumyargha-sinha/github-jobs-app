import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./module/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
