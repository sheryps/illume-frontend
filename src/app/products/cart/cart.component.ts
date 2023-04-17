import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartitem:any=[]
  grand:number=0
  updatedgrand:number=0
  total:number=0
  discount:number=0
  gst:number=0
  constructor(private data:DataService,private router:Router){}
  ngOnInit(): void {
    this.data.cartlist.subscribe(
      (data:any)=>{
        this.cartitem=data
        this.discount=this.data.discount()
        this.total=this.data.total()
        

        this.grand=Math.round(this.total-this.discount)
        this.gst=this.grand+(this.grand*(18/100))
        
      }
    )
  }
  removecart(product:any){
    this.data.removecart(product)
    
  }
  removeall(){
    this.data.removeall()
  }
  //discounts

  discount50per(){
    let discount=(this.grand*50)/100
    this.updatedgrand=this.grand-discount
  }
  discount30per(){
    let discount=(this.grand*53)/100
    this.updatedgrand=this.grand-discount
  }
  discount10per(){
    let discount=(this.grand*10)/100
    this.updatedgrand=this.grand-discount
  }
  discount5per(){
    let discount=(this.grand*5)/100
    this.updatedgrand=this.grand-discount
  }
  proceed(){
    alert('Your order is placed')
    this.router.navigateByUrl('')
  }
}
