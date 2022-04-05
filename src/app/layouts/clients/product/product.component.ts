import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ClientProductComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList (){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
