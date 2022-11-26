import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'productlist', redirectTo: '/products', pathMatch: 'full' },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      {
        // define the second argument (producName)
        path: 'products/:productId/:productName',component: ProductDetailsComponent,
      },
      { path: 'cart', component: ShoppingCartComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
