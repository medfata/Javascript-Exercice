import { Rstdatasource } from "./rest.datasource";
import { ExerciceModel } from "./exercice.model";
import { FormControl } from "@angular/forms";
import { stringify } from "querystring";
import { TpModel } from "./tp.model";
import { HttpClient } from "@angular/common/http";

export class TpValidation{
  


 static   check(){
        return (control:FormControl) : {[key: string]: any} =>{
            let val = control.value;     
            let tps: TpModel[];
            let data = new Rstdatasource(); data.getTps().subscribe(datatps => tps = datatps);   
           if( tps.findIndex(tp => tp['name'] == val)){
               return null
           }else {
               return { "tpripetition" : {"tp":val}}
           }
        }
    }
}