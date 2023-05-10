import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: string | null = localStorage.getItem("userToken")

  constructor(private _http: HttpClient) {}


  addToCart(id: string): Observable<any> {
    return this._http.post('https://route-ecommerce.onrender.com/api/v1/cart',


      {
        productId: id
      },
      {
        headers: {
          token: `${this.token}`
        }
      }
    );
  }
  getCart(): Observable<any> {
    return this._http.get('https://route-ecommerce.onrender.com/api/v1/cart',
      {
        headers: {
          token: `${this.token}`
        }
      }
    );
  }


  updateCart(id: string, count: number): Observable<any> {
    return this._http.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,


      {
        count: count
      },
      {
        headers: {
          token: `${this.token}`
        }
      }
    );
  }

  deleteItem(id: string): Observable<any> {
    return this._http.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,

      {
        headers: {
          token: `${this.token}`
        }
      }
    );
  }

  handlePayment(shippingAddress: string, cartId: string): Observable<any> {
    return this._http.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress
      },
      {
        headers: {
          token: `${this.token}`
        }
      }
    )
  }
  displayOrders(cartwOwner:string): Observable<any> {
    return this._http.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${cartwOwner}`)
  }

}




