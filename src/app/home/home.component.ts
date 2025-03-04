// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { ProductsService } from '../products.service';
import { SortByPricePipe } from '../sort-by-price.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FilterByNamePipe, SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sortOption: 'asc' | 'desc' = 'asc';
  products: any[] = [];
  searchTerm = '';
 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}