import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { Config } from "./config";
import { HttpModule } from "@angular/http";


@NgModule({
    providers:[Config, HttpService],
    imports: [ HttpModule ]
})
export class SharedModule{}