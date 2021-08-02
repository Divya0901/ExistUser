import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveCustomerService {

  constructor(private _http: HttpClient) { }

  public saveUserToRemote(customer: Customer):Observable<any> {
    return this._http.post<any>("http://localhost:8080/saveCustomer", customer)
  }
}
