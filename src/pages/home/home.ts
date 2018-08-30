import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { GamePage } from '../game/game';
import { PlaceService } from '../service/places.service';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user={
    name:"Shagun",
    regno:"11400330",
    phone:9980978889
  }

  loader = this.loadingCrtl.create({
    content:"😇 Have  Patience..  😇 ",
    duration:2000
  })
  
  places:string[]=[];
  showList=false;
  descriptionPlace:string[]=[];
  constructor(public navCtrl: NavController,public placeService:PlaceService, public loadingCrtl:LoadingController,public callNumber:CallNumber,private modalCrtl:ModalController) {
    this.loader.present();
  }

  onCallNumber(){
    this.callNumber.callNumber("7973649414", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  
  onNewPlace(){
    this.navCtrl.push('NewPlacePage')
  }
  game(){
    this.navCtrl.push('GamePage')
  }
  ionViewWillEnter(){
    this.places=this.placeService.getPlaces();
    this.descriptionPlace=this.placeService.getDescription();
    if(this.places.length>0){
      this.showList=true;
    }
  }

  openModal(){
    const modal=this.modalCrtl.create('ModalPage',{data:this.user});
    modal.present();
  }
}
