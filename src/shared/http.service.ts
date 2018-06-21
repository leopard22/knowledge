import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Config } from "./config";


@Injectable()
export class HttpService {
    constructor(public http: Http, public config: Config){

    }

    getHeaders(){
        const token = localStorage.getItem('token');
        if (token) {
            return new Headers({
                Authorization: token
            });
        }
        return new Headers({});
    }

    get(resource){
        
        const options = new RequestOptions();
        options.headers = this.getHeaders();
        return this.http.get(this.config.API_URL + resource,options);
    }

    post(resource,data){
        const options = new RequestOptions();
        options.headers = this.getHeaders();
        return this.http.post(this.config.API_URL + resource,data,options);
    }
}