import { Component } from '@angular/core';
import { AppService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-project';
  constructor(private service: AppService) {}
  test(){
    this.service.test().subscribe(str =>{
      console.log(str);
    });
  }
}
