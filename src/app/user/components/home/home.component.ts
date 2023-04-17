import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthControlService } from 'src/app/auth-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productData=new FormGroup({
    product:new FormControl,
    desc:new FormControl,
    price:new FormControl,
    discount:new FormControl,
    category:new FormControl
  })
  constructor(private fb:FormBuilder,private Auth:AuthControlService,private router:Router){}
  ngOnInit(): void {
    this.productData = this.fb.group({
      product:['',[Validators.required]],
      desc:['',[Validators.required]],
      price:['',[Validators.required]],
      discount:['',[Validators.required]],
      category:['',[Validators.required]]
    })
  }

  url=''
  onselectFile(e:any){
    if(e.target.files){
      
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        
        
      }
    }
    
  }
  productdata(){
    if(this.productData.valid){
      var title=this.productData.value.product
      var description=this.productData.value.desc
      var price=this.productData.value.price
      var discount=this.productData.value.discount
      var category=this.productData.value.category
      console.log(this.productData.value);
      try{
        this.Auth.addproducts(title,description,price,discount,category,this.url).subscribe(
          (result:any)=>{
            alert(result.message)
            this.router.navigateByUrl('/User/user')
          },
          result=>{
            alert(result.error.message)
          }
        )
      }
      catch(error){
        console.log(error);
        
      }

    }
    
  }
  signUser(){
    localStorage.removeItem('User')
  }
}
