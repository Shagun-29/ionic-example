import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PlaceService } from '../service/places.service';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  placeName="";
  places=[];
  description=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public placeService: PlaceService, public alertController:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  add(){
    if(this.placeName){
    this.placeService.addPlaces(this.placeName)
    this.placeService.addDescription(this.description)
    this.navCtrl.pop();
    }else{
      const alert = this.alertController.create({
        title : "Warning",
        subTitle:"Fill place info",
        buttons:['OK']
      })
      alert.present();
    }
    
  }
}
