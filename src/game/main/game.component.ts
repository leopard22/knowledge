import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeaderBoard } from '../leaderBoard/leaderBoard.component';
import { UsersService } from '../../users/userService';
import { GameService } from '../gameService';
import { Question, Answer } from '../gameModel';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { User } from '../../users/userModel';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Platform } from 'ionic-angular';



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
    public text: string;
    public rate: number;
    public locale: string;
    


    constructor( public navCtrl: NavController, public param: NavParams,
                 public userService: UsersService, public gameService: GameService,
                 private tts: TextToSpeech, public plt: Platform){
      
                  this.user.nickname = localStorage.getItem('User-nickname');
                  this.user.avatar_url = localStorage.getItem('User-avatar');
                console.log(this.user);
                // this.text = 'Initial text';
                // this.rate = 1;
                // this.locale = 'en-US';
                //this.tts = new TextToSpeech();  
                
                // this.plt.ready().then((readySource) => {
                //   console.log('Platform ready from', readySource);
                  
                //   this.tts.speak(  "option" )
                //   .then(() => console.log('Success'))
                //   .catch((reason: any) => console.log(reason));
    
                  


                // });
      
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

      this.readQuestion(this.questions[currentIndex].question);
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

    readQuestion(text){
      const options = {text:text, locale:this.locale, rate: this.rate}
      this.tts.speak(  options )
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
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