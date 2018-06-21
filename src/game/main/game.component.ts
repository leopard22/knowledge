import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../users/login/login.component';
import { Inscription } from '../../users/subscribe/inscription.component';
import { LeaderBoard } from '../leaderBoard/leaderBoard.component';



@Component({
    selector: 'game',
    templateUrl: 'game.html',
  })

  export class Game{

    public score: number = 0 ;
    public nbQuestion = 20 ;
    // tab1Root = Game;
    // tab2Root = Game;
    // tab3Root = LeaderBoard;

    constructor( public navCtrl: NavController, public param: NavParams){

    }


    startGame(){
      console.log("le jeu commence");

      while (this.nbQuestion > 0)
      {
        console.log("le jeu commence"+this.nbQuestion);
        this.nbQuestion = this.nbQuestion -1; 

      }


    }

    timer(){

    }

    gameLost(){}

    scoreGame(answer){
      if(answer == true){
        this.score = this.score + 10;
      }else{
        this.score = this.score - 10;
      }
    }

    getScore(){
      return this.score;
    }

  }