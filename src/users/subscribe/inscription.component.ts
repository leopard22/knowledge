import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../userModel';
import { Login } from '../login/login.component';
import { UsersService } from '../userService';


@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.html',
})
export class Inscription {

    public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UsersService) {
      this.user = { nickname: '',
                    score: 0,
                    time: 0,
                    avatar_url: '' }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  inscription(){
    console.log(this.user)
    this.userService.addUser(this.user).subscribe(response =>{ response.json();
            
      console.log(response.json())}),error => error.json();

      this.navCtrl.push(Login);
  }


}
