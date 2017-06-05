import { Injectable } from '@angular/core';
import { HttpMethodsService } from './http-methods.service';
import { APIEndpoints } from './api-endpoints.service';
import { EndpointConfigService } from './endpoint-config.service';

@Injectable()
export class AppService {

  constructor(private httpMethodsService: HttpMethodsService, private endpointConfigService : EndpointConfigService) {

    }

getCustomersProfile(){
 return this.httpMethodsService.getAll(this.endpointConfigService.getHostEnvironment('url') +
 APIEndpoints['loadCustomersProfile'].endpoint )
}

getCustomerProfile(custId){
 return this.httpMethodsService.getOneById(this.endpointConfigService.getHostEnvironment('url') +
 APIEndpoints['loadCustomersProfile'].endpoint + '/' + custId )
}
}
