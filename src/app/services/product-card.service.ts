import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  public views: number = 14;
  public addViews() {
    this.views += 1;
  }
}
