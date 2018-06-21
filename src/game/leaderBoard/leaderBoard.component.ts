import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
    selector: 'leaderBoard',
    templateUrl: 'leaderBoard.html',
  })

  export class LeaderBoard{

    constructor( public navCtrl: NavController, public param: NavParams){

    }
  }