import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule, RouterLink, FilterByNamePipe,SortByPricePipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit { 
  sortOption: 'asc' | 'desc' = 'asc';
    products: any[] = [];
    searchTerm = '';
   
  
    constructor(private productsService: ProductsService) { }
  

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
