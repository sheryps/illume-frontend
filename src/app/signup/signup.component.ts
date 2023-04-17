import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthControlService } from '../auth-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerData=new FormGroup({
    username:new FormControl,
    email:new FormControl,
    password:new FormControl,
    confpassword:new FormControl,
    role:new FormControl
  })
  constructor(private fb:FormBuilder,private auth:AuthControlService,private router:Router){}
  ngOnInit(): void {
    this.registerData = this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confpassword:['',[Validators.required,Validators.minLength(6)]],
      role:['',[Validators.required]]
    })
  }
  register(){
    if(this.registerData.valid){
      var name=this.registerData.value.username
      var email=this.registerData.value.email
      var password=this.registerData.value.password
      var role=this.registerData.value.role
      if(this.registerData.value.password===this.registerData.value.confpassword){
          this.auth.register(name,email,password,role).subscribe(
            (result:any)=>{
              alert(result.message)
              this.router.navigateByUrl('/login')
            },
            result=>{
              alert(result.error.message)
            }
          )
      }
    }


    
  }
}
