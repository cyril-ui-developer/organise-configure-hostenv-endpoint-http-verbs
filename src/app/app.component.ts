import { Component ,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Getting and Posting Data to Server in Angular 2 using Observable';

  constructor(private appService: AppService){
}


}
