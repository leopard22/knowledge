import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";
import { Subject } from "rxjs/Subject";
import { User } from "../users/userModel";
import { Question } from "./gameModel";


@Injectable()

export class GameService{

    subject: Subject<Array<User>> = new Subject();
    questionSubject: Subject<Array<Question>> = new Subject();

    constructor(public http: HttpService){

    }

    getLeaderBoard(){
          
          return  this.http.get('api/json')
                     .subscribe(response =>{
                        this.subject.next(response.json());
                              
                },error => this.subject.next(error.json()));
   

    }

    getQuestion(){
        return this.http.getGame().subscribe( response => { this.questionSubject.next(response.json().results);  } )
    }

}