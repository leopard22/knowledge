import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { User } from "./userModel";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()

export class UsersService{

    private user: User;

    public subject: BehaviorSubject<User> = new BehaviorSubject(this.user);

    constructor(public http: HttpService){

    }

    addUser(user){
        console.log(user);
        return this.http.post('api/score',user);
    }

    getUser(){
        return this.http.get('api/json');
    }



}