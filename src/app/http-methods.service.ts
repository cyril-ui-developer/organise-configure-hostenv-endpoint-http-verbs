import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpMethodsService {

  constructor(private http: Http ) { }

  getMethod(url): Observable<any> {
      return this.http.get(url)
                      .map((response: Response) => {
                        const result = response.json();
                        return result;
                      })
                      .catch((error: Response | any) => {
                        console.log(error.statusText);
                        return Observable.throw(error.statusText);
                      });
    }



}
