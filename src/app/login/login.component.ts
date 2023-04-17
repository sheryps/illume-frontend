import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthControlService } from '../auth-control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData=new FormGroup({
    username:new FormControl,
    password:new FormControl
  })
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthControlService){}
  ngOnInit(): void {
    this.loginData = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  loginValue(){
    if(this.loginData.valid){
      var email=this.loginData.value.username
      var password=this.loginData.value.password
      if(email==="superadmin@gmail.com" && password==="superadmin"){
        this.router.navigateByUrl('Super/super')
        localStorage.setItem('Superadmin',JSON.stringify(email))
      }
      else{
        this.auth.login(email,password).subscribe(
          (result:any)=>{
            if(result.role===1){
              this.router.navigateByUrl('Admin/admin')
              localStorage.setItem('admin',JSON.stringify(result.user))
              alert(result.message)
            }
            if(result.role===0){
              this.router.navigateByUrl('User/user')
              localStorage.setItem('User',JSON.stringify(result.user))
              alert(result.message)
            }
          },
          result=>{
            alert(result.error.message)
          }
        )
      }
      
    }
    
  }
}
