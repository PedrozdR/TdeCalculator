import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PercgoduraPage } from '../percgodura/percgodura';
import { PercgordurafemPage } from '../percgordurafem/percgordurafem';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  sexo = this.sexo;



  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  percGodura() {
    if (this.sexo == "masc") {
      const modal = this.modalCtrl.create(PercgoduraPage);
      modal.present();
       console.log("entrou no masc");
    }else{
      const modal = this.modalCtrl.create(PercgordurafemPage);
      modal.present();
      console.log("entrou no fem");
      
    }
  }

}
