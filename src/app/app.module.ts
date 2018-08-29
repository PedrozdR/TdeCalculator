import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculatorPage } from '../pages/calculator/calculator';
import { PercgoduraPage } from '../pages/percgodura/percgodura';
import { PercgordurafemPage } from '../pages/percgordurafem/percgordurafem';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorPage,
    PercgoduraPage,
    PercgordurafemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorPage,
    PercgoduraPage,
    PercgordurafemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
