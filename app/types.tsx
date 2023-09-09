export interface Order {
    status:string,
    orderNumber:string, 
    title:string,
    img:string,
    price:number,
    rating:number
  }
  
 export interface Project {
    
    phase: string, 
    name:string,
    img: string,
    percentage:number, 
    number: string,
    model:string, 
    deliveryDate:string,
    orders: Order[]
  }
export interface ProjectGroup {
    [key:string] : any;
}