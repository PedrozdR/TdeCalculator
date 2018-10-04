import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  imc: any;
  faixa: any;
  tbm: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.imc = navParams.get('imc')
    this.faixa = navParams.get('faixa');
    this.tbm = navParams.get('tbm');
  }



  ionViewDidLoad() {
    console.log(this.imc)
    console.log(this.faixa)
    console.log(this.tbm)
  }

  voltaCalculator() {
    this.navCtrl.push(CalculatorPage);
  }




}
