import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingHomeComponent } from './component/listing-home/listing-home.component';
import { JobCardComponent } from './component/job-card/job-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [ListingHomeComponent, JobCardComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    FormsModule,NgxSkeletonLoaderModule,
    SharedModule
  ],
  providers: []
})
export class ListingModule { }
