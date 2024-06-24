import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class  ProductsServices {
    
    constructor( private http:HttpClient ) {}

    getProducts(){
        return this.http.get<any>('http://localhost:4000/api/products')
    }
    getproductById(id: string){
        return this.http.get<any>(`http://localhost:4000/api/products/${id}`)
    }
    
}