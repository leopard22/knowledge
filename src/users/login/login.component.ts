import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Toast } from 'ionic-angular';
import { User, Avatar } from '../userModel';
import { Inscription } from '../subscribe/inscription.component';
import { UsersService } from '../userService';
import { Game } from '../../game/main/game.component';
import { empty } from 'rxjs/Observer';


@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class Login {

    public user: User;
    public avatar: Avatar;
    private toast: Toast;
    public monAvatar: string = "https://api.adorable.io/avatars/109/abott@adorable.png";


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userService: UsersService, public toastCtrl:ToastController) {
      
      this.user = { nickname: '',
                    score: 0,
                    time: 0,
                    avatar_url: '' };
      this.avatar = { color:'', mouth:'', nose:'', eyes:'' };
      this.toast = toastCtrl.create({
        message:'Erreur login',
        duration:2000,
        position:'middle',
        
    });
  }
//lors du chargement de la view on test si le user existe ou non
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if((localStorage.getItem('User-nickname') != "") && (localStorage.getItem('User-avatar') != ""))
    {
      this.user.nickname = localStorage.getItem('User-nickname');
      this.user.avatar_url = localStorage.getItem('User-avatar');
      this.toast.setMessage('Re-bonjour '+this.user.nickname);
      this.toast.present;
      console.log("login existe");
      console.log(this.user);
    }  
    
  }

  inscription(){
    //localStorage.clear();
  }
// enregistrer le nom et avatar du user dans localstorage et le récupperer partout dans l'application/ ecrase si c'est un autre joueur
  connexion(){

    if(localStorage.getItem('User-nickname') == "" || localStorage.getItem('User-nickname') != this.user.nickname ){
      localStorage.setItem('User-nickname',this.user.nickname);
      this.user.avatar_url = this.monAvatar.replace('abott',this.user.nickname);
      localStorage.setItem('User-avatar',this.user.avatar_url);
      console.log("login n'existe pas")
    }
     
     console.log(this.user);

     if(this.user.nickname){
      this.navCtrl.push(Game);
     }
    //  else{
    //   this.toast.present();
    //  }
    
     
  }
  

}
