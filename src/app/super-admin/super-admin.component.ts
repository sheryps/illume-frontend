import { Component, OnInit } from '@angular/core';
import { AuthControlService } from '../auth-control.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  approvedproducts:any=[]
  products:any=[]
  constructor(private Auth:AuthControlService){}
  ngOnInit(): void {
    this.Auth.getallpendingProducts().subscribe(
      (data:any)=>{
        this.products=data.products        
        console.log(this.products);
        
        this.products.forEach((item:any)=>{
          if(item.action==='Approved'){
              this.approvedproducts.push(item)
          }

        })
        console.log(this.approvedproducts);
      }
    )
  }
  addtooriginal(product:any){
    
    this.Auth.addtoorginal(product).subscribe(
      (data:any)=>{
        alert(data.message);
        
      },
      result=>{
        alert(result.error.message)
      }
    )
  }
  signUser(){
    localStorage.removeItem('Superadmin')
  }
}
