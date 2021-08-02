import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { SaveCustomerService } from 'src/app/save-customer.service';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.css']
})
export class SaveCustomerComponent implements OnInit {

  customer = new Customer();
  msg = '';

  constructor(private _service: SaveCustomerService, private _router: Router) { }

  ngOnInit(): void {
  }

  saveCustomer() {
    this._service.saveUserToRemote(this.customer).subscribe(
      data => {
        console.log("recieved response");
        this.msg = "Customer saved successfully!"
      },
      error => {
        console.log("exception");
      }
    )
  }
}
