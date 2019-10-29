import { Component } from '@angular/core';
import {ItemSliding, NavController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ChatmainPage } from '../chatmain/chatmain';
import { ChatindPage } from '../chatind/chatind';
import { PhotoPage } from '../photo/photo';
import { LoginPage } from '../login/login';
import {DomSanitizer} from "@angular/platform-browser";

import { EventEmitter } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  };

  prof(){
    {
      this.navCtrl.push(ProfilePage);
      }
  }
  chatm(){
    this.navCtrl.push(ChatmainPage)
  }
  chatid(){
    this.navCtrl.push(ChatindPage)
  }
  pho(){
    this.navCtrl.push(PhotoPage)
  }
  lgn(){
    this.navCtrl.push(LoginPage)
  }

  swipeEvent($event) {

  }

  favorite(item: ItemSliding) {

  }

  share(item: ItemSliding) {

  }

  unread(item: ItemSliding) {

  }

  images=["assets/imgs/stuhl.jpg",
    "assets/imgs/stuhl.jpg",
    "assets/imgs/stuhl.jpg",
  ];

  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController) {

    for (let i = 0; i < this.images.length; i++) {
      this.attendants.push({
        id: i + 1,
        likeEvent: new EventEmitter(),
        destroyEvent: new EventEmitter(),
        asBg: sanitizer.bypassSecurityTrustStyle('url('+this.images[i]+')')
      });
    }

    this.ready = true;
  }

  onCardInteract(event) {
    console.log(event);
  }

}
