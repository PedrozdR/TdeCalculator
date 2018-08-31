import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { PercgoduraPage } from '../percgodura/percgodura';
import { PercgordurafemPage } from '../percgordurafem/percgordurafem';
import { ResultadoPage } from '../resultado/resultado';

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
  idade = this.idade;
  peso = this.peso;
  altura = this.altura;
  atividade = this.atividade;




  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  percGodura() {
    if (this.sexo == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe seu sexo!',
        subTitle: 'Preencha o campo de genero e tente novamente!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      if (this.sexo == "masc") {
        const modal = this.modalCtrl.create(PercgoduraPage);
        modal.present();
        console.log("entrou no masc");
      } else {
        const modal = this.modalCtrl.create(PercgordurafemPage);
        modal.present();
        console.log("entrou no fem");
      }
    }
  }

  verificaValores() {


    if (this.sexo == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe seu sexo!',
        subTitle: 'Preencha o campo de genero e tente novamente!',
        buttons: ['OK']
      });
      alert.present();

    } if (this.idade == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe sua Idade!',
        subTitle: 'Preencha o campo de idade e tente novamente!',
        buttons: ['OK']
      });
      alert.present();

    } if (this.peso == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe seu peso!',
        subTitle: 'Preencha o campo de peso e tente novamente!',
        buttons: ['OK']
      });
      alert.present();

    } if (this.altura == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe sua altura!',
        subTitle: 'Preencha o campo de altura e tente novamente!',
        buttons: ['OK']
      });
      alert.present();

    } if (this.atividade == null) {
      const alert = this.alertCtrl.create({
        title: 'Informe sua frequencia!',
        subTitle: 'Preencha o campo de frequencia de atividade e tente novamente!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  resultado() {
    if (this.sexo && this.idade && this.peso && this.altura && this.atividade != null) {
      var calculo = parseInt(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura));
      var imc = parseFloat(calculo.toFixed(2));
      var faixa: any;

      if (imc<=15) {
        faixa = String("ESTRENANEBTE ABAIXO DO PESO");
      } else {
        if (imc >= 15 && imc <= 16) {
          faixa = String("GRAVEMENTE ABAIXO DO PESO");
        } else {
          if (imc >= 16 && imc <= 18.5) {
            faixa = String("ABAIXO DO PESO IDEAL");
          } else {
            if (imc >= 18.5 && imc <= 25) {
              faixa = String("NA FAIXA DO PESO IDEAL");
            } else {
              if (imc >= 25 && imc <= 30) {
                faixa = String("SOBREPESO");
              } else {
                if (imc >= 30 && imc <= 35) {
                  faixa = String("COM OBESIDADE GRAU I");
                } else {
                  if (imc >= 35 && imc <= 40) {
                    faixa = String("COM OBESIDADE GRAU II(GRAVE)");
                  } else {
                    if (imc > 40) {
                      faixa = String("OBESIDADE GRAU III(MÓRBIDA");
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.navCtrl.push(ResultadoPage, { imc, faixa });
    }

  }




}




