import { Component , OnInit} from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';
import { userData } from '../userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  public formSubmitted : boolean = false;

  constructor( private formBuilder: FormBuilder, private router: Router, private service: ServeService){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
  loginUser(){
    const data : any = {
      userId : this.loginForm.controls['userId'].value,
      password : this.loginForm.controls['password'].value
    }
this.service.getUserDataInfo(data.userId,data.password).subscribe((data)=>{

let user= data[0];

if(user.userId==this.loginForm.controls['userId'].value && user.password== this.loginForm.controls['password'].value){
  console.log("hellooo");
  this.router.navigate(['home'])
}

})

  }
 
  register(){
    this.router.navigate(['register'])
  }
  reseting(){
    this.loginForm.reset()
  }
}
