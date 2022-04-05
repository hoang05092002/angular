import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ClientHomeComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetProduct()
  }

  onGetProduct(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
