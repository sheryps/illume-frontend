import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts: [],searchkey: string,propname:string): any[] {
    if(!allproducts||searchkey==''||propname==''){
      return allproducts;
    }
    const result:any=[]//new array
    allproducts.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product)
      }
        
    })
    return result;
  }

}
