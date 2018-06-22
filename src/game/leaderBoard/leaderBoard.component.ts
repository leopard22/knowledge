import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameService } from '../gameService';
import { User } from '../../users/userModel';
import { Game } from '../main/game.component';



@Component({
    selector: 'leaderBoard',
    templateUrl: 'leaderBoard.html',
  })

  export class LeaderBoard{

    public leaderBoard: User[];

    constructor( public navCtrl: NavController, public param: NavParams, public gameService:GameService){

    }

    ionViewWillEnter(){
      this.gameService.getLeaderBoard();
      this.gameService.subject.asObservable().subscribe(board => this.leaderBoard=board);
      console.log(this.leaderBoard);
 }

    getLeaderBoard(){
      
      this.gameService.getLeaderBoard();
      this.gameService.subject.asObservable().subscribe(board => this.leaderBoard=board);
      console.log(this.leaderBoard);
    }

    // reorderItems(indexes) {
    //   this.items = reorderArray(this.items, indexes);
    // }

    returnOnGame(){
      this.navCtrl.push(Game);
    }

  }