import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServices } from '../../services/products.services';
import { AuthService } from '../../services/auth.service';
import { Product } from '../product.model'; // Asegúrate de importar el modelo Product
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  product: Product | undefined;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private productsServices: ProductsServices,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      tap(params => console.log('Route params:', params)),
      switchMap(params => {
        this.productId = params['id'];
        return this.productsServices.getproductById(this.productId);
      })
    ).subscribe(
      (data: any) => {
        console.log('Product data:', data);
        this.product = data.data; // Asegúrate de que data.data coincida con la estructura de tu API
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );

    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  showBuyButton(): boolean {
    return this.user && this.user.role && this.user.role.some((role: any) => role.name === 'User');
  }

  addToCart(product: Product): void {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log('Adding product to cart:', product);
    // Por ejemplo, puedes llamar a un servicio de carrito para agregar el producto
  }

}
