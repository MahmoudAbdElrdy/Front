import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {ChartModule} from 'primeng/chart';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import "@angular/compiler"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule } from 'primeng/calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {MessageService,MenuItem, ConfirmationService} from 'primeng/api';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SlideMenuModule} from 'primeng/slidemenu';
import {PasswordModule} from 'primeng/password';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview'
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { ToolbarModule } from 'primeng/toolbar';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";  
import { PaginatorModule } from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton'
import { UsersComponent } from './Users.component';
import { UploadServicesService } from '../dashboards/UploadServices/UploadServices.service';
import { AuthGuard } from '../dashboards/auth-guard';
import { PurchasesServiceProxy } from 'src/shared/service-proxies/service-proxies';
import { CompanyService, DiscountService, IdentityService, NotificationClientService, ProductService } from '../api/services';
const routes: Routes = [
  {
    path: 'User',
    data: {
      title: 'authentication Page',
      urls: [
        { title: 'Login', url: '/authentication/login' },
        { title: 'authentication Page' }
      ]
    },
    component: UsersComponent
  }
];
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [ NgxSpinnerModule,
      FormsModule,ReactiveFormsModule ,
      ToolbarModule,
      NgbModule,
      ChartsModule,
      ChartistModule,
      PerfectScrollbarModule,
      RouterModule.forChild(routes),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
          }
      }),
      ChartModule,
      NgxChartsModule,
      NgxDatatableModule,
      TableModule,
      DataViewModule,
      FormsModule,
      ToastModule,
      DataViewModule,
      PanelModule,
      DialogModule,
      DropdownModule,
      TabViewModule,
      InputTextModule,
      ButtonModule,
      CodeHighlighterModule,
     // BrowserAnimationsModule,
      AutoCompleteModule,
      ScrollPanelModule,
      OverlayPanelModule,
      CheckboxModule,
      MegaMenuModule,
      PasswordModule,
      BreadcrumbModule,
      PanelMenuModule,
      SlideMenuModule,PaginatorModule,ConfirmDialogModule,RadioButtonModule,RatingModule,CalendarModule,MultiSelectModule
  ],
  declarations: [UsersComponent],
  providers: [//TableService
    UploadServicesService,AuthGuard,ConfirmationService,ProductService,IdentityService,CompanyService,DiscountService,NotificationClientService
,PurchasesServiceProxy ]
})
export class UsersModule { }
