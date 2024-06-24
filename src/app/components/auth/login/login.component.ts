import { Component, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = 'login'
  enlace = 'register'
  text2  = 'Don t have an account?'

  registroForm: FormGroup = this.formBuilder.group({
    
    email:['',[]],
    password: ['',[]]
  }) 

  constructor(private formBuilder: FormBuilder, private loginServices: LoginService){}

    onSubmit(): void{
      if(this.registroForm.valid){
        console.log(this.registroForm.valid)
          this.loginServices.postLogin(this.registroForm.value).subscribe(data =>{
            console.log(data)
          })
      }
    }
}
