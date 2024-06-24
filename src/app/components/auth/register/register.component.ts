import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { RegisterServices } from '../../../services/register.services';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title ="Register"
  enlace ='login'
  text2 = 'Do you already have an account'

  registroForm: FormGroup = this.formBuilder.group({
    username:['',[]],
    email:['',[]],
    password: ['',[]]
  }) 

  constructor(private formBuilder: FormBuilder, private registerServices: RegisterService){}

    onSubmit(): void{
      if(this.registroForm.valid){
        console.log(this.registroForm.valid)
          this.registerServices.postRegister(this.registroForm.value).subscribe(data =>{
            console.log(data)
          })
      }
    }
  
}
