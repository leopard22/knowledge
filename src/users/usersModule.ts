import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Login } from './login/login.component';
import { Inscription } from './subscribe/inscription.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from './userService';
import { SharedModule } from '../shared/httpModul';

@NgModule({
  declarations: [ Login,Inscription ],
  entryComponents:[Login,Inscription],
  imports: [ BrowserModule, IonicModule, SharedModule ],
  providers:[ UsersService ]
  
})
export class UsersModule {}