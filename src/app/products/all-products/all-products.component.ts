import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allproducts:any=[]//array of data 
  searchTerm:string='';
  filterCategory:any=[]
  constructor(private data:DataService){}
  ngOnInit(): void {
    this.data.getallProducts().subscribe(
      (data:any)=>{
        this.allproducts = data.products
        this.filterCategory=data.products
        this.allproducts.forEach((a:any)=>{
          if(a.category==="Women's Clothing" || a.category==="Men's Clothing"){
            a.category="Fashion"
          }
        })
        console.log(this.allproducts);
        
      }
    )
    this.data.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )
    
  }
  filter(category:string){
    console.log(category);
    
    this.filterCategory = this.allproducts
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  addtocart(product:any){
    this.data.addtocart(product)
  }
}
