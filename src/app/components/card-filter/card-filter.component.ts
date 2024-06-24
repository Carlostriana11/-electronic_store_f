import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { Product } from '../../interfaces/product';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.css'
})
export class CardFilterComponent {
  products!: any ;
  constructor( private productServices: ProductsServices){}

  
  ngOnInit(){
      this.productServices.getProducts().subscribe( (data) => {
        console.log(data.data)


        for (const products of data.data) {
          let result = products.filter((product: Product) => product.category == 'Electrodomésticos');
          return result
        }

        // this.products = 
      })
  }

  productFilter(){}  
}
