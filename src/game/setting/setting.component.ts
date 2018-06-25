import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
    selector: 'setting',
    templateUrl: 'setting.html',
  })

  export class Setting{

public difficulte: string;

    constructor(public navCtrl: NavController, public navParams: NavParams){

    }
    
    setDifficulty(){
        
    }

  }