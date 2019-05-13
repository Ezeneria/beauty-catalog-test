import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {dataMockListItems} from '../../data-catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogMockDataService {
   hello = Observable.create((observer) => {
    observer.next(dataMockListItems);
    observer.complete();
  });

}
