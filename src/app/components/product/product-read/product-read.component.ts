import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  displayedColumns = ['id', 'name', 'price', 'action'];

  ngOnInit(): void {
    this.productService.readProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
