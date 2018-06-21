import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { Game } from './main/game.component';
import { GameService } from './gameService';
import { SharedModule } from '../shared/httpModul';
import { LeaderBoard } from './leaderBoard/leaderBoard.component';


@NgModule({
    declarations:[ Game, LeaderBoard ],
    entryComponents:[ Game, LeaderBoard ],
    imports: [ BrowserModule, IonicModule, SharedModule ],
    providers:[GameService ],   
    
  })
  
  export class GameModule {}