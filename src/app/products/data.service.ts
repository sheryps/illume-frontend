import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartarray:any=[]//array
  cartlist=new BehaviorSubject([])//list

  constructor(private http:HttpClient) { }
  
  getallProducts(){
    return this.http.get('http://localhost:3000/all-products')
    //json data
  }
  searchKey = new BehaviorSubject('')

  //add to cart

  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//stream of data
    console.log(this.cartlist);
    let total =this.gettotal()
    
  }
  //calculate total
  total(){
    let total=0
    this.cartarray.map((item:any)=>{
      total+=Math.round(item.price)
    })
    return total
  }
  //calculate discount
  discount(){
    
    let discount=0
    this.cartarray.map((item:any)=>{
      discount+=Math.round(item.price*(item.discount/100))
      
    })
    return discount
  }
  //calculate grandtotal
  gettotal(){
    let grandtotal=0
    let discounttotal=0
    this.cartarray.map((item:any)=>{
      discounttotal+=Math.round((item.price*(item.discount/100)))
      grandtotal+=Math.round((item.price-discounttotal))
      
    })
    return grandtotal
  }
  //remove an single item from cart
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id===item.id){
        this.cartarray.splice(index,1)//remove from cart
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }
  //empty the cartlist
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }
}
