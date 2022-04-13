import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  id: string | number | undefined;
  type: boolean | undefined;
  avatarBase64: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      status: new FormControl(0),
    });
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe((data: any) => {
        this.productForm = new FormGroup({
          name: new FormControl(data.name, Validators.required),
          desc: new FormControl(data.desc, Validators.required),
          price: new FormControl(data.price, Validators.required),
          image: new FormControl(data.image, Validators.required),
          status: new FormControl(0),
        });
      });
      this.type = true;
    } else {
      this.type = false;
    }
  }

  onCreate(data: any) {
    data.image = this.avatarBase64;
    this.productService.createProduct(data).subscribe((data: any) => {
      window.alert('Tạo mới sản phẩm thành công !');
      this.router.navigate(['/admin/phones']);
    });
  }

  onUpdate(data: any) {
    if (!this.avatarBase64) {
      this.productService.getProduct(this.id).subscribe((data: any) => {
        this.productForm = new FormGroup({
          name: new FormControl(data.name, Validators.required),
          desc: new FormControl(data.desc, Validators.required),
          price: new FormControl(data.price, Validators.required),
          image: new FormControl(data.image, Validators.required),
          status: new FormControl(0),
        });
      });
    }
    this.productService.updateProduct(this.id, data).subscribe((data) => {
      window.alert('Cập nhật sản phẩm thành công !');
      this.router.navigate(['/admin/phones']);
    });
  }

  resultString(e: any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }

    return '';
  }

  changeAvatar(event: any) {
    const arrayImageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const file = event.target.files[0];
    if (file.size > 500000) {
      return alert('Kích thước file quá lớn');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }

    console.log(file.size, file.type);
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.avatarBase64 = e.target?.result;

      console.log(this.avatarBase64);

      const image = new Image();
      image.src = this.resultString(e);

      console.log(image.width, image.height);
    };
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }
}
