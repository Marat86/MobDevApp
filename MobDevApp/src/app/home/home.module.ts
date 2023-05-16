import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
})
export class HomePageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';




@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([]), IonicModule.forRoot({})],
  declarations: [HomePage, PageOneComponent, PageTwoComponent],
  bootstrap: [HomePage],
})
export class AppModule {}