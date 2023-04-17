import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  categories=[
    {
      id:1,
      title:"Men's Clothing"
    },
    {
      id:2,
      title:"jewelery"
    },
    {
      id:3,
      title:"electronics"
    },
    {
      id:4,
      title:"Women's Clothing"
    }
  ]
  cartcount:number=0
  constructor(private data:DataService){}
  
  ngOnInit(): void {
    this.data.cartlist.subscribe(
      (data:any)=>{
        this.cartcount=data.length
      }
    )
    
  }
  cat(title:any){
    console.log(title);
    
  }
  search(event:any){
    let searchKey = event.target.value
    this.data.searchKey.next(searchKey)
  }
}
