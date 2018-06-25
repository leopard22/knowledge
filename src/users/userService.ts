import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { User } from "./userModel";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Avatar } from "./userModel";

@Injectable()

export class UsersService{

    private user: User;
    private avatar: Avatar;

    public subject: BehaviorSubject<User> = new BehaviorSubject(this.user);

    constructor(public http: HttpService){

    }

    addUser(user: User){
        console.log(user);
        return this.http.post('api/score',user);
    }

    getUser(){
        return this.http.get('api/json');
    }

    getAvatar(avatar: Avatar){

        console.log(avatar);
        let resource: string = avatar.eyes+'/'+avatar.nose+'/'+avatar.mouth+'/'+avatar.color;
        
        return this.http.getAvatar(resource);
    }



}