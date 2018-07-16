import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service
import { ProductService } from '../../../services/product.service';

// Class
import { Product } from '../../../models/product';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    let way = true;
    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
      way = true;
    } else {
    this.productService.updateProduct(productForm.value);
      way = false;
    }

    this.resetForm(productForm);
    if (way) {
      this.toastr.success('Operacion Exitosa', 'Producto Registrado');
    } else {
      this.toastr.success('Operacion Exitosa', 'Producto Modificado');
    }
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
    }
      this.productService.selectedProduct = new Product();
  }

}
