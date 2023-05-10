import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Orders } from '../orders';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cartID: string = ''
  ordersList: Orders[]=[]
  constructor(private _cartService: CartService) {

  }
  ngOnInit(): void {
    this.dislpayOrders()
  }

  dislpayOrders() {
    this._cartService.displayOrders("6447b5e2e916450033687172").subscribe({
      next: (res) => {
        this.ordersList=res.data
        console.log(this.ordersList);
      },
      error: (err) => {
        console.log(err);

      }
    })

  }
}
