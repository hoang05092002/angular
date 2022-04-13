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

  getProduct(id: number|string|undefined) {
    return this.http.get(`${apiUrl}/${id}`);
  }

  deleteProduct(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createProduct(data: any) {
    return this.http.post(apiUrl, data);
  }

  updateProduct(id: number|string|undefined, obj: any) {
    return this.http.put(`${apiUrl}/${id}`, obj);
  }
}
