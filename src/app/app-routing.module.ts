import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { IndexComponent } from './layouts/admin/index/index.component';
import { AboutComponent } from './layouts/clients/about/about.component';
import { ContactComponent } from './layouts/clients/contact/contact.component';
import { ClientHomeComponent } from './layouts/clients/home/home.component';
import { ClientIndexComponent } from './layouts/clients/index/index.component';
import { ClientProductComponent } from './layouts/clients/product/product.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './layouts/clients/product-detail/product-detail.component';
import { ProductComponent } from './layouts/admin/product/product.component';
import { ProductFormComponent } from './layouts/admin/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientIndexComponent,
    children: [
      {
        path: 'home',
        component: ClientHomeComponent,
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
      {
        path: 'phones',
        component: ClientProductComponent,
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: "admin",
    component: IndexComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "phones",
        component: ProductComponent,
      },
      {
        path: "phones/create",
        component: ProductFormComponent,
      },
      {
        path: "phones/edit/:id",
        component: ProductFormComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
