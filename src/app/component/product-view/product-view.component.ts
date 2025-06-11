import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodel';

@Component({
  selector: 'app-product-view',
  standalone: false,
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  data:any | product[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.displayproducts();
  }
displayproducts() {
  this.api.getproduct().subscribe(res=>{
    this.data = res;
    console.log(res)
  })
}
}
