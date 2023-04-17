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
    return this.http.post('https://illume-app-task.onrender.com/register',body)
  }
  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('https://illume-app-task.onrender.com/login',body)
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
    
    return this.http.post('https://illume-app-task.onrender.com/addproducts',body)
  }
  getallpendingProducts(){
    return this.http.get('https://illume-app-task.onrender.com/all-pendingproducts')
    //json data
  }
  changestatus(id:any){
    const body={
      id
    }    
    return this.http.post('https://illume-app-task.onrender.com/approveproduct',body)
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
    return this.http.post('https://illume-app-task.onrender.com/addtoooriginal',body)
  }
}
