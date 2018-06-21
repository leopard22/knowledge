import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";


@Injectable()

export class GameService{

    constructor(public http: HttpService){

    }

    getLeaderBoard(){
        this.http.get('api/json').subscribe
    }

}