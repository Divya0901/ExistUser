import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-emppage',
  templateUrl: './emppage.component.html',
  styleUrls: ['./emppage.component.css']
})
export class EmppageComponent implements OnInit {

  customer = new Customer();
  CustomerDetails:any= [];
  constructor(private _service: SearchService, private _router: Router) { }

  ngOnInit(): void {
  }

  searchCustomer() {
    this._service.searchCustomerFromRemote(this.customer).subscribe(
      data => {
        console.log("recieved response");
        this.CustomerDetails = data;
      },
      error => {
        console.log("exception occured");
        
      }
    )
  }
}
