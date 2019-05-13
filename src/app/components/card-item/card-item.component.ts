import {Component, EventEmitter, OnInit} from '@angular/core';
import {ProductCardService} from '../../services/product-card.service';
import {ActivatedRoute, Router, RouterState} from '@angular/router';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  state$;
  constructor( private productCard: ProductCardService, private router: ActivatedRoute) { }
  ngOnInit() {
  this.productCard.addViews();
  this.state$ = this.router.paramMap
    .pipe(map(() => console.log(window.history.state)));
  console.log(this.router);
  }
}
