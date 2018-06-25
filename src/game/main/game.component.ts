import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeaderBoard } from '../leaderBoard/leaderBoard.component';
import { UsersService } from '../../users/userService';
import { GameService } from '../gameService';
import { Question, Answer } from '../gameModel';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { User } from '../../users/userModel';



@Component({
    selector: 'game',
    templateUrl: 'game.html',
  })

  export class Game{

    @ViewChild(Slides) slides: Slides;
    public score: number = 0 ;
    public nbQuestion = 20 ;
    public questions: Question[];
    public answers: Array<Object>=[];
    public start = false;
    public slidePage = 0;
    public user: User = {nickname:'',avatar_url:'',score:0,time:0};
    public timeStart: number = 0;
    public nickname: string;
    


    constructor( public navCtrl: NavController, public param: NavParams,
                 public userService: UsersService, public gameService: GameService){
      
                  this.user.nickname = localStorage.getItem('User-nickname');
                  this.user.avatar_url = localStorage.getItem('User-avatar');
                console.log(this.user);
      
    }

    ionViewWillEnter(){
      this.gameService.getQuestion();
      this.gameService.questionSubject.asObservable().subscribe(Q => this.questions = Q );      
    }


    startGame(){
      console.log("le jeu commence");
      this.start = true;
      console.log(this.questions);

      this.timeStart = this.timer();      

    }

    questionChanged(){
      let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    }

    timer(){
      return Date.now();
    }

    gotoBoard(){
      if( this.start == false){
        this.navCtrl.push(LeaderBoard);
      }
      
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
        console.log(this.slidePage +" === "+ this.questions.length);
        this.start = false;
        this.gameEnd( );
      }
      this.slides.slideTo(this.slidePage, 500);

    }
  
    answer(answer){

      const myAnswer: Answer= {question:0, reponse:''};
      console.log(this.slides.getActiveIndex()+" answer method");
      console.log(answer+" answer method");      
      
      myAnswer.question = this.slides.getActiveIndex();
      myAnswer.reponse = answer;

      this.answers.push(myAnswer);
      this.scoreGame(answer,this.slides.getActiveIndex())
      this.goToSlide(1);
    }

    scoreGame(answer,position){

      if(this.questions[position].correct_answer == answer){
        this.score = this.score + 10;
      }else{
        this.score = this.score - 10;
      }
    }
    gameEnd(){

      let timeEnd = this.timer() - this.timeStart;

      this.user.time =  Math.floor(timeEnd/1000);

      this.user.score = this.score;

      console.log(this.user);
      
    }


    toLeaderBoard(){
      if(this.user.time != 0 || this.slidePage == this.questions.length){
        this.userService.addUser(this.user).subscribe(response =>{ response.json();
            
          console.log(response.json())}),error => error.json();
    
          this.navCtrl.push(LeaderBoard,this.user);
      }
      
    }

  }