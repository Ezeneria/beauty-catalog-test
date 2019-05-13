import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NgbModal, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { IconComponent } from './components/icon/icon.component';
import { ModalComponent } from './components/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  {
    path: 'products/:id',
    loadChildren: './modules/product-list/product-list.module#ProductListModule'
  },
  { path: '**', redirectTo: '', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    IconComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    ButtonsModule,
    HttpClientModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
