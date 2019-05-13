import {Component, Input, OnInit} from '@angular/core';
import {CatalogMockDataService} from '../../services/catalog-mock-data.service';
import {ProductCardService} from '../../services/product-card.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private dataMockListItems: CatalogMockDataService,
    private productCard: ProductCardService,
    private modalService: NgbModal
    ) { }

  dashboardItems = [];
  listmodeView: boolean = false;
  views: number = this.productCard.views;

  trackByFn(index, item) {
    return item.id;
  }
  openFormModal() {
    const modalRef = this.modalService.open(ModalComponent);

    modalRef.result.then((result) => {
      this.dashboardItems.push(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  ngOnInit(): void {
    this.dataMockListItems.hello.subscribe(val => this.dashboardItems = val);
    console.log(this.dataMockListItems);
  }

  changeView() {
    this.listmodeView = !this.listmodeView;
  }

  addCard() {
    this.dashboardItems.push({title: 'Beats', imgUrl: 'beats', id: 7});
  }

  deleteCard(index, event) {
    this.dashboardItems.splice(index, 1);
    event.preventDefault();
    event.stopPropagation();
  }
}
