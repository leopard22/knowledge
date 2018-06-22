import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../users/login/login.component';
import { LeaderBoard } from '../leaderBoard/leaderBoard.component';
import { UsersService } from '../../users/userService';
import { GameService } from '../gameService';
import { Question, Answer } from '../gameModel';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



@Component({
    selector: 'game',
    templateUrl: 'game.html',
  })

  export class Game{

    @ViewChild(Slides) slides: Slides;
    public score: number = 0 ;
    public nbQuestion = 20 ;
    public questions: Question[];
    public myAnswer: Answer[];
    public start = false;
    public slidePage = 0;
    


    constructor( public navCtrl: NavController, public param: NavParams, public userService: UsersService, public gameService: GameService){

    }

    ionViewWillEnter(){
      this.gameService.getQuestion();
      this.gameService.questionSubject.asObservable().subscribe(Q => this.questions = Q );      
    }


    startGame(){
      console.log("le jeu commence");
      this.start = true;
      console.log(this.questions);
     // this.gameService.getQuestion(); atob

    }

    questionChanged(){
      let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    }

    timer(){

    }

    gotoBoard(){
      this.navCtrl.push(LeaderBoard);
    }

    gameLost(){}

    goToSlide(position) {

      this.slidePage = this.slidePage + position;
      if(this.slidePage < 0){
        this.slidePage = 0;
      }
      if(this.slidePage == this.questions.length)
      {
        this.slidePage = this.questions.length - 1;
        console.log(this.slidePage +" === "+ this.questions.length)
      }
      this.slides.slideTo(this.slidePage, 500);

    }
  
    answer(answer){
      this.slides.getActiveIndex();
    this.myAnswer[this.slides.getActiveIndex()] = answer;
    this.goToSlide(1);

    }

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

    // toLeaderBoard(){
    //   this.userService.addUser(this.user).subscribe(response =>{ response.json();
            
    //     console.log(response.json())}),error => error.json();
  
    //     this.navCtrl.push(Login);
    // }

  }