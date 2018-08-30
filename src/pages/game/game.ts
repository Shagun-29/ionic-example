import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  name1="";
  name2="";
  show=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertController:AlertController) {
  }
  get score(){
    const score = (this.name1 + this.name2).toLowerCase();
    let sum=0;
    for(let i=0;i<score.length;i++){
      sum+=score.charCodeAt(i);
    }
    return sum % 101;
  }
  check(){
    
    if(this.name1 && this.name2){
      this.show=true;
    }else{
      const alert = this.alertController.create({
        title : "Warning",
        subTitle:"Fill Name info",
        buttons:['OK']
      })
      alert.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  
}
