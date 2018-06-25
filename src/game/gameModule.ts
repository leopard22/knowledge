import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { Game } from './main/game.component';
import { GameService } from './gameService';
import { SharedModule } from '../shared/httpModul';
import { LeaderBoard } from './leaderBoard/leaderBoard.component';
import { Setting } from './setting/setting.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
    declarations:[ Game, LeaderBoard, Setting ],
    entryComponents:[ Game, LeaderBoard, Setting ],
    imports: [ BrowserModule, IonicModule, SharedModule ],
    providers:[GameService,TextToSpeech ],   
    
  })
  
  export class GameModule {}