import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  productdata?:any | product;
  constructor(private api:ApiService, private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid')
    // console.log("product id is", productid)
    
    productid && this.api.getproductbyid(productid).subscribe((res)=> {
      this.productdata = res;
      // console.log(res)
    })

    }
  }


