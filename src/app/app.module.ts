import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientIndexComponent } from './layouts/clients/index/index.component';
import { IndexComponent } from './layouts/admin/index/index.component';
import { ClientHeaderComponent } from './layouts/clients/header/header.component';
import { HeaderComponent } from './layouts/admin/header/header.component';
import { ClientFooterComponent } from './layouts/clients/footer/footer.component';
import { ClientProductComponent } from './layouts/clients/product/product.component';
import { ProductComponent } from './layouts/admin/product/product.component';
import { AboutComponent } from './layouts/clients/about/about.component';
import { ContactComponent } from './layouts/clients/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { ClientHomeComponent } from './layouts/clients/home/home.component';
import { HomeComponent } from './layouts/admin/home/home.component';
import { SliderComponent } from './layouts/clients/slider/slider.component';
import { ProductService } from './services/product.service';
import { FooterComponent } from './layouts/admin/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './layouts/clients/product-detail/product-detail.component';
import { SidebarComponent } from './layouts/admin/sidebar/sidebar.component';
import { ProductFormComponent } from './layouts/admin/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ClientIndexComponent,
    ClientHeaderComponent,
    HeaderComponent,
    ClientFooterComponent,
    FooterComponent,
    ClientProductComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    ClientHomeComponent,
    HomeComponent,
    SliderComponent,
    ProductDetailComponent,
    SidebarComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
