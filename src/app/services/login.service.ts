import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoginService{

    constructor(private http:HttpClient){}

    postLogin( newProduct:any){
        return this.http.post<any>('http://localhost:4000/api/auth/login', newProduct)
    }
}