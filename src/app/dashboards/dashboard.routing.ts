import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AuthGuardAdmin } from './AuthGuardAdmin';
import { AuthGuardOffice } from './AuthGuardOffice';
import { AuthGuardSupplier } from './AuthGuardSupplier';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NotificationClientComponent } from './notification-client/notification-client.component';
import { ArchiveProductComponent } from './Product/archive-product/archive-product.component';
import { ProductComponent } from './Product/Product.component';
import { PurchaseUserComponent } from './purchase-user/purchase-user.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { UsersComponent } from './users/users.component';


export const DashboardRoutes: Routes = [
    {
       
        path: '',
       
        children: [
            {
                path: 'Home',
                canActivate:[AuthGuard],
                component: Dashboard1Component,
                data: {
                  
                    title: 'Home',
                    urls: [
                        { title: 'Home', url: '/Home' },
                        { title: 'Home' }
                    ]
                }
            },
            {
                path: 'Categories',
                canActivate:[AuthGuard],
                component: CategoryComponent,
                data: {
                    title: 'Category',
                    urls: [
                        { title: 'Category', url: '/Category' },
                        { title: 'Category' }
                    ]
                }
            },
            {
                path: 'Product',
                canActivate:[AuthGuard],
                component: ProductComponent,
                data: {
                    title: 'Product',
                    urls: [
                        { title: 'Product', url: '/Product' },
                        { title: 'Product' }
                    ]
                }
            }
            ,
            {
                path: 'Company',
                canActivate:[AuthGuard],
                component: CompanyComponent,
                data: {
                    title: 'Company',
                    urls: [
                        { title: 'Company', url: '/Company' },
                        { title: 'Company' }
                    ]
                }
            }
            ,
            {
                path: 'Product',
                canActivate:[AuthGuard],
                component: ProductComponent,
                data: {
                    title: 'Product',
                    urls: [
                        { title: 'Product', url: '/Product' },
                        { title: 'Product' }
                    ]
                }
            }
            ,
            {
                path: 'ArchiveProduct',
                canActivate:[AuthGuard],
                component: ArchiveProductComponent,
                data: {
                    title: 'ArchiveProduct',
                    urls: [
                        { title: 'ArchiveProduct', url: '/ArchiveProduct' },
                        { title: 'ArchiveProduct' }
                    ]
                }
            } ,
            {
                path: 'NotificationClient',
                canActivate:[AuthGuard],
                component: NotificationClientComponent,
                data: {
                    title: 'NotificationClient',
                    urls: [
                        { title: 'NotificationClient', url: '/NotificationClient' },
                        { title: 'NotificationClient' }
                    ]
                }
            }
            ,
            {
                path: 'Purchases',
                canActivate:[AuthGuard],
                component: PurchasesComponent,
                data: {
                    title: 'Purchases',
                    urls: [
                        { title: 'Purchases', url: '/Purchases' },
                        { title: 'Purchases' }
                    ]
                }
            },
            {
                path: 'Users',
                canActivate:[AuthGuard],
                component: UsersComponent,
                data: {
                    title: 'Users',
                    urls: [
                        { title: 'Users', url: '/Users' },
                        { title: 'Users' }
                    ]
                }
            },
            {
                path: 'Sales',
                canActivate:[AuthGuard],
                component: PurchaseUserComponent,
                data: {
                    title: 'Purchase User',
                    urls: [
                        { title: 'Purchase User', url: '/Sales' },
                        { title: 'Users' }
                    ]
                }
            }
//NotificationClientComponent
        ]
    },
    
];
