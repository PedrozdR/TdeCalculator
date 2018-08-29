import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

/**
 * Generated class for the PercgordurafemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-percgordurafem',
  templateUrl: 'percgordurafem.html',
})
export class PercgordurafemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PercgordurafemPage');
  }

  voltaCalculatorFem(){
    this.navCtrl.push(CalculatorPage);
    console.log("voltou")
  }

}
