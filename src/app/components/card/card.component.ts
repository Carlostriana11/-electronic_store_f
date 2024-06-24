import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  products!: any ;
    constructor( private productServices: ProductsServices){}

    ngOnInit(){
        this.productServices.getProducts().subscribe( (data) => {
          console.log(data.data)

          this.products = data.data
        })
    }
}
