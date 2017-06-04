import { Injectable } from '@angular/core';
import { EndpointConfigService } from './endpoint-config.service';
import { APIEndpoints } from './api-endpoints.service';



@Injectable()
export class AppService {

  constructor(endpointConfigService: EndpointConfigService ) {
    console.log(endpointConfigService.getHostEnvironment('url') +
    endpointConfigService.getWsMicroServiceBaseUrl()['admin'].url + APIEndpoints['loadData'].endpoint);
    console.log(endpointConfigService.getHostEnvironment('url') +
    endpointConfigService.getWsMicroServiceBaseUrl()['products'].url + APIEndpoints['saveData'].endpoint);
}



}
