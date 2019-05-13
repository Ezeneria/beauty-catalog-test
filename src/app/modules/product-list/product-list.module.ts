import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import {CardItemComponent} from '../../components/card-item/card-item.component';

@NgModule({
  declarations: [
    CardItemComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
  ]
})
export class ProductListModule { }
