import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authData!:any
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private url:any = "http://52.14.34.161:4000/api"
  constructor(private http:HttpClient, private router: Router) {}


  postLogin( newProduct:any){
    return this.http.post<any>(`${this.url}/auth/login`, newProduct)

    .pipe(
      tap( (response: any)=>{
        console.log(response)
        
        localStorage.setItem(' user ', JSON.stringify(response.user));
        localStorage.setItem('token', response.token!);
        
        this.userSubject.next(response.user);
    
        if (response.ok){
          this.router.navigate( [ 'dashboard' ] );

        }else{
          this.router.navigate( [ 'register' ] )
        }
      }),

      map( (response: any) =>{
        catchError( error =>{
          return of(false);
    
        })
      })
    )
  }

  getUser(){
    return  this.userSubject.value;  
  }


  postRegister( newRegister:any){
    return this.http.post<any>(`${this.url}/auth/register`, newRegister)

    .pipe(
      tap( (response: any)=>{
        console.log(response)
        
        localStorage.setItem('token', response.token!);
        
        this.userSubject.next(response.user);
    
        if (response.ok){
          this.router.navigate( [ 'login' ] );

        }else{
          this.router.navigate( [ 'register' ] )
        }
      }),

      map( (response: any) =>{
        catchError( error =>{
          return of(false);
    
        })
      })
    )
  }


  verifyToken(){
    const token = localStorage.getItem( 'token') || '';
    const headers = new HttpHeaders().set( 'X-Token', token );


    return this.http.get<any>(`${this.url}/auth/renew-token`, {headers})
    
    .pipe(
      tap( data=> {
        console.log( data )

        if( data.token ){
          console.log( data.userData );
          this.authData = data.userData!;
          localStorage.setItem( 'token' , data.token);
        }
        else{
          localStorage.removeItem( 'token' );
        }
      }),

      map(data => data.ok),
      catchError((error:any) =>{
        return of (false)
      })
    )
  }
}
