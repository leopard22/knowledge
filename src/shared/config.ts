import { Injectable } from "@angular/core";

@Injectable()
export class Config{
    API_URL: string = "http://leaderboard.lp1.eu/";
    API_GAME: string = "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=boolean";
}