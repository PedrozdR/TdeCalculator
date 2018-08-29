import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

/**
 * Generated class for the PercgoduraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-percgodura',
  templateUrl: 'percgodura.html',
})
export class PercgoduraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PercgoduraPage');
  }

  voltaCalculatorMasc(){
     this.navCtrl.push(CalculatorPage);
  }

}
