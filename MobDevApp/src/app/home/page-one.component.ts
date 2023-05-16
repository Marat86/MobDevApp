import { Component } from '@angular/core';

import { PageTwoComponent } from './page-two.component';

@Component({
  selector: 'app-page-one',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-nav-link router-direction="forward" [component]="component">
        <ion-button>Videos</ion-button>
      </ion-nav-link>
      <ion-nav-link router-direction="forward" [component]="component">
        <ion-button>Photos</ion-button>
      </ion-nav-link>
    </ion-content>
  `,
})


export class PageOneComponent {
  component = PageTwoComponent;

}
