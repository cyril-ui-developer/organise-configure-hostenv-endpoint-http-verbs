import { Component ,OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AppModel } from './model.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Getting and Posting Data to Server in Angular 2 using Observable';
  customers: AppModel[] = [];
  customer: AppModel;
  errorMsg: string;

  constructor(private appService: AppService){
    this.fetchCustomersProfile();
    this.fetchCustomerProfile('id');
    this.addCustomer({"name":"Meekness", "gender":"M"});
}

fetchCustomersProfile() {
    this.appService.getCustomersProfile()
     .subscribe(
                  (data: AppModel[]) => {  this.customers = data; },
                  (error) =>  {this.errorMsg = error; }
                )

    }

fetchCustomerProfile(id) {
    this.appService.getCustomerProfile(id)
     .subscribe(
                  (data: AppModel) => {  this.customer = data; },
                  (error) =>  {this.errorMsg = error; }
                )

    }

addCustomer(customer: AppModel) {
    this.appService.createCustomer(customer)
                   .subscribe(
                              (customer)  => {this.customers.push(customer)},
                              (error) =>  {this.errorMsg = error; }

                     );

}
}
