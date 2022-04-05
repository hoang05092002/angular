import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(apiUrl);
  }

  getProduct(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`);
    // ~ apiUrl + '/' + id
    // ~ 'http://localhost:3000/Products/1
  }

  deleteProduct(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createProduct(obj: {name:string, class: string}) {
    return this.http.post(apiUrl, obj);
  }

  updateProduct(id: number|string, obj: any) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
