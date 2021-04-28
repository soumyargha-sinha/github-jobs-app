import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule, NgxSkeletonLoaderModule,
    SharedModule
  ]
})
export class DetailsModule { }
