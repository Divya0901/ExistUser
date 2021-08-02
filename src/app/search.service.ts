import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  public searchCustomerFromRemote(customer: Customer) {
  return this._http.get<any[]>("http://localhost:8080/fetchCustomer/?name="+customer.name+"&panNumber="+customer.panNumber+"&aadharNumber="+customer.aadharNumber+"&DOB="+customer.dob);
    //if(customer.name != null)
   //   return this._http.get<any[]>("http://localhost:7090/fetchCustomer?name="+customer.name)
    //if(customer.dob != null)
    //  return this._http.get<any[]>("http://localhost:7090/fetchCustomer?dob="+customer.dob)
    //if(customer.panNumber != null)
    //  return this._http.get<any[]>("http://localhost:7090/fetchCustomer?panNumber="+customer.panNumber)
  //  if(customer.aadharNumber)
    //  return this._http.get<any[]>("http://localhost:7090/fetchCustomer?aadharNumber="+customer.aadharNumber)
   // else
    //  return this._http.get<any[]>("http://localhost:7090/fetchCustomer?id="+customer.id)
  
}
}
