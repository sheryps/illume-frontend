import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthControlService {

  constructor(private http:HttpClient) { }
  register(name:any,email:any,password:any,role:any){
    const body={
      name,
      email,
      password,
      role
    }
    return this.http.post('http://localhost:3000/register',body)
  }
  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }
  addproducts(title:any,description:any,price:any,discount:any,category:any,image:any){
    const body={
      title,
      description,
      price,
      discount,
      category,
      image
    }
    console.log(body);
    
    return this.http.post('http://localhost:3000/addproducts',body)
  }
  getallpendingProducts(){
    return this.http.get('http://localhost:3000/all-pendingproducts')
    //json data
  }
  changestatus(id:any){
    const body={
      id
    }    
    return this.http.post('http://localhost:3000/approveproduct',body)
  }
  addtoorginal(product:any){
    const body={
      id:product._id,
      title:product.title,
      description:product.description,
      price:product.price,
      discount:product.discount,
      category:product.category,
      image:product.image
    }
    return this.http.post('http://localhost:3000/addtoooriginal',body)
  }
}
