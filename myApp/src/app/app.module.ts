import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AbcdService} from '../providers/abcd.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { CompletedPageModule } from '../app/completed/completed.module';


export const firbaseConfig = {
  apiKey: "AIzaSyCygfjCzQl4yLc10-A0v7clkL2S4m0iOIU",
  authDomain: "todoproject-417fd.firebaseapp.com",
  databaseURL: "https://todoproject-417fd.firebaseio.com",
  projectId: "todoproject-417fd",
  storageBucket: "todoproject-417fd.appspot.com",
  messagingSenderId: "399334025574"
};

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firbaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    CompletedPageModule
  
  ],


  providers: [
    StatusBar,
    SplashScreen,
    AbcdService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
