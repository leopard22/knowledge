import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../userModel';
import { Inscription } from '../subscribe/inscription.component';
import { UsersService } from '../userService';
import { Game } from '../../game/main/game.component';


@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class Login {

    public user: User;
    public nickname: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userService: UsersService) {
      this.nickname = '';
      this.user = { nickname: '',
                    score: 0,
                    time: 0,
                    avatar_url: '' }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  inscription(){
      this.navCtrl.push(Inscription);
  }

  connexion(){
      console.log(this.user);
      this.user.nickname = this.nickname;
      this.navCtrl.push(Game);
  }

}
