import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class  ProductsServices {
    private url:any = "http://52.14.34.161:4000/api"
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

    