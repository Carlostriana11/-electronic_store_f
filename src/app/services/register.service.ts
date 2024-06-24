import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient){}

  postRegister( newProduct:any){
    console.log(newProduct)
      return this.http.post<any>('http://localhost:4000/api/auth/register', newProduct)
  }
}
