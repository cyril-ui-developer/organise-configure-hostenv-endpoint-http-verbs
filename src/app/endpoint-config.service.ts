import { Injectable } from '@angular/core';

@Injectable()
export class EndpointConfigService {

private wsMicroServiceBaseUrl: Object = {
                                 admin:{
                                    url: '/admin-micro-service ',
                                    msg: '......'
                                },
                                  products:{
                                    url: '/products-micro-service',
                                    msg: '.....'
                                }
                              };


 private hostEnvironment(value) {
        const environment: string = window.location.hostname;
        let serverUrl: Object = {};

        switch (environment) {
           case'localhost':
                serverUrl = {
                    url: 'https://localhost:3000/xxxxx'
                };
                break;
            case'dev':
                serverUrl = {
                    url: 'https://dev:7000/xxxxx.com'
                };
                break;
             case 'aq.server.com':
                serverUrl = {
                    url: 'https://qa:5000/xxxxx.com'
                };
                break;

             case 'uat.server.com':
                serverUrl = {
                    url: 'https://uat:6000/xxxxx.com'
                };
                break;
             case 'prod.server.com':
                serverUrl = {
                    url: 'https://prod:9900/xxxxx.com'
                };
                break;

            default:
                serverUrl = {
                    url: 'https://locahost:3000/xxxx'
                };
        }
        return serverUrl[value];
    }

    getHostEnvironment(value) {
      return this.hostEnvironment(value);
    }
     getWsMicroServiceBaseUrl() {
      return this.wsMicroServiceBaseUrl;
    }


  constructor() {
    console.log('this.getWsMicroServiceBaseUrl()')
   }


}






