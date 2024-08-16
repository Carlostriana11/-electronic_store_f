import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class  ProductsServices {
<<<<<<< HEAD
    private url:any = "http://52.14.34.161:4000/api"
=======
    private url:any = "http://18.117.131.41:4000/api"
>>>>>>> 441b535bcba30f017125bcd4e1c737deb582c0f6
    constructor( private http:HttpClient ) {}

    getProducts(){
        return this.http.get<any>(`${this.url}/products`)
    }
    getproductById(id: string){
        return this.http.get<any>(`${this.url}/products/${id}`)
    }

    UpdateProductById(id:string, newProduct:any){
        return this.http.patch<any>(`${this.url}/api/products/${ id }`, newProduct)
    }

    createProduct(newProduct:any){
        return this.http.post<any>(`${this.url}/api/products`, newProduct)
    }
    getCategories() {
        return this.http.get<any>(`${this.url}/categorys`);
    }
    
    deleteProductById(id: string) {
        return this.http.delete<any>(`${this.url}/api/products/${id}`);
    }
}

    