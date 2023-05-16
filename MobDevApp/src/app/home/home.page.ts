import { Component } from '@angular/core';
import { PageOneComponent } from './page-one.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  component = PageOneComponent;

  constructor() {}

}