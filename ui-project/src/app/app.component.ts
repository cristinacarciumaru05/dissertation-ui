import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui-project';
  constructor(private service: AppService, private router: Router) { }
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'greetings' },
      { label: 'Publications', icon: 'pi pi-fw pi-pencil', routerLink: 'info' }
    ];
  }
  test() {
    this.service.test().subscribe(str => {
      console.log(str);
    });
  }
  getActive(){
    console.log(this.router.url);
    if(this.router.url == '/') {
      return this.items[0];
    }
    return this.items[1];
  }
}
