import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Login } from "../users/login/login.component";
import { Inscription } from '../users/subscribe/inscription.component';
import { UsersService } from "../users/userService";
import { Game } from '../game/main/game.component';
import { LeaderBoard } from '../game/leaderBoard/leaderBoard.component';
import { Setting } from '../game/setting/setting.component';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public userService: UsersService,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { title: 'Login', component: Login },
        { title: 'Inscription', component: Inscription },
        { title: 'JEU', component:Game },
        { title: 'Leader Board', component:LeaderBoard },
        { title: 'Réglage', component: Setting }
      ];


    });
  }
}

