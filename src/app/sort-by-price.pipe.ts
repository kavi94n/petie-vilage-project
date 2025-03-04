import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'sortByPrice', standalone: true })
export class SortByPricePipe implements PipeTransform {
  transform(items: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!items) return [];
    
    return [...items].sort((a, b) => { 
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}