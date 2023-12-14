import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userData } from '../userData';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: any;
  public formSubmitted : boolean = false;
  public passwordMatch: boolean= true;
 
constructor( private router: Router, private formBuilder: FormBuilder, private service: ServeService){}


  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      userId: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{5,29}$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      reEnterPassword: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required ,Validators.email] ),
      phoneNumber : new FormControl(null, [Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]),
      role: new FormControl(null,[Validators.required])
      
    })
  }
  addUserData(){
   const userDatainfo: userData={
      userId: this.registerForm.controls['userId'].value,
      password: this.registerForm.controls['password'].value,
      reEnterPassword: this.registerForm.controls['reEnterPassword'].value,
      email: this.registerForm.controls['email'].value,

      phoneNumber: this.registerForm.controls['phoneNumber'].value,
      role: this.registerForm.controls['role'].value,
    }
    console.log(userDatainfo,"user registration data");
    this.service.addUserData(userDatainfo).subscribe((data) => {
      console.log(data);
      this.registerForm.reset();
    })
    this.router.navigate(['home'])
  }
  public matchPassword(){
    let password : any= this.registerForm.controls['password'].value;
    let confirmPassword: any = this.registerForm.controls['reEnterPassword'].value;

    if(password !=null&& confirmPassword!=null && password?.length==confirmPassword?.length && password===confirmPassword){
       this.passwordMatch= true;
    }
    else{
       this.passwordMatch = false;
    }

  }
 
}
