import { Component, OnInit } from '@angular/core';
import { ProductCardService } from '../../services/product-card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  constructor( private productCard: ProductCardService, private router: ActivatedRoute) { }
  ngOnInit() {
  this.productCard.addViews();
  }
}
