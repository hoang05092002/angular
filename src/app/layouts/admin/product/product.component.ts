import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onGetProduct();
  }

  onGetProduct(): void {
    this.productService.getProducts().subscribe((data) => {

      this.products = data;
    });
  }

  onDelete(id: string | number): void {
    if(confirm("Chắc chắn xóa sản phẩm ?")){
      this.productService.deleteProduct(id).subscribe((data) => {
        window.alert("Xóa sản phẩm thành công !");
        this.onGetProduct();
      });
    }
  }

  onChangeStatus(id: string | number, status: string | number) {
    if (confirm('Bạn chắc chắn muốn thay đổi trạng thái sản phẩm ?')) {
      this.productService.getProduct(id).subscribe((data: any) => {
        console.log(data);
        if (data.status === 1) {
          data.status = 0;
          this.productService.updateProduct(id, data).subscribe(data => {
            window.alert('Cập nhật trạng thái thành công !');
            this.onGetProduct();
          })
        } else {
          data.status = 1;
          this.productService.updateProduct(id, data).subscribe(data => {
            window.alert('Cập nhật trạng thái thành công !');
            this.onGetProduct();
          })
        }
      })
    }


  }
}
