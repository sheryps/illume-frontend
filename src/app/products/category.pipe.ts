import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(allproducts: [],catkey: string,propname:string): any[] {
    if(!allproducts||catkey==''||propname==''){
      return allproducts;
    }
    const result:any=[]//new array
    allproducts.forEach((product:any)=>{
        console.log(product);
        
    })
    return result;
  }

}
