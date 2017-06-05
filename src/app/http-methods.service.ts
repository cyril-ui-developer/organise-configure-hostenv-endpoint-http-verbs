import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppModel } from './model.service';

@Injectable()
export class HttpMethodsService {

getAll(url): Observable<AppModel[]> {
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
getOneById(url): Observable<AppModel> {
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
  constructor(private http: Http ) { }

}
