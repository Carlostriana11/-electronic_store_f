import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProductsServices } from '../../services/products.services';

@Component({
  selector: 'app-product-deatail',
  templateUrl: './product-deatail.component.html',
  styleUrl: './product-deatail.component.css'
})
export class ProductDeatailComponent {

  constructor(private activeRoute: ActivatedRoute, private productsServices: ProductsServices){}

  productId!: string
  product!: any
  
  ngOnInit(){
    this.activeRoute.params
    .pipe(
      tap( Response => {
        console.log( Response)
        return Response
      }),
      map( Response => Response[ 'id' ])
    
    ).subscribe( id => {
      console.log(id);

      this.productId = id;
      
      this.productsServices.getproductById( this.productId ).subscribe( ( data )=> {
        console.log( data )
        this.product = data.data
      })
      
    })

 }
}
