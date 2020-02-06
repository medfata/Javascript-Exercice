import { Rstdatasource } from "./rest.datasource";
import { forEach } from "@angular/router/src/utils/collection";

export class ExerciceModel{
    constructor(private id?:number, private tp?:number,private name?:string,private descreption?:string,private template?:string, private solution?:string){

    }

    generateId():number{
        let datasource= new Rstdatasource();
        let exercices;
        let exericeId = 10;
         datasource.getExercices().subscribe(data => exercices = data );
         exercices.forEach(ex =>{
            if(exericeId==ex['id']){
                exericeId++;
            }
         } )
         return exericeId;
    }
}