import { Component, OnInit } from '@angular/core';
import { AuthControlService } from '../auth-control.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pendingproducts:any=[]
  products:any=[]
  constructor(private Auth:AuthControlService){}
  ngOnInit(): void {
    this.Auth.getallpendingProducts().subscribe(
      (data:any)=>{
        this.products=data.products    
        console.log(this.products);
            
        this.products.forEach((item:any)=>{
          if(item.action==='pending'){
              this.pendingproducts.push(item)
          }

        })
            console.log(this.pendingproducts);
      }
    )

    
  }
  addtobase(product:any){
    
    this.Auth.changestatus(product._id).subscribe(
      (data:any)=>{
        alert(data.message);
        window.location.reload()
      },
      result=>{
        alert(result.error.message)
      }
    )
  }
  signUser(){
    localStorage.removeItem('admin')
  }
}
