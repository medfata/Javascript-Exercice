import { Component, Input } from "@angular/core";
import { ExerciceModel } from "src/model/exercice.model";

@Component({
    selector:"exercice",    
    template:`
    <div id="ExComp">
        <h2>Exercice Name : {{Exercice["name"]}}</h2>
        <h5>Exercice Tp : {{Exercice["tp"]}}</h5>
        <p>Descreption : {{Exercice["descreption"]}}</p>
        <button class="btn btn-primary" style="margin-right:22px" (click)="testEx()">Test Exercice</button>
        <button class="btn btn-danger" (click)="cancelEx(Exercice)">Cancel</button>
    </div>
    <button *ngIf="execute!= undefind && execute==true" (click)="showConsoledata()" class="btn btn-primary">Execute</button>
    <button *ngIf="execute!= undefind && execute==true" class="btn btn-danger" (click)="cancelEx(Exercice)">Cancel</button>`
})
export class ExerciceComp{
    execute?:boolean;

    @Input()
     Exercice:ExerciceModel;

     cancelEx(){
        document.getElementById("ExComp").innerHTML = "";
        this.execute = false;
     }

     testEx(){
         if(this.Exercice != undefined && this.Exercice != null)
         document.getElementById("ExComp").innerHTML = this.Exercice["template"]; 
         this.execute = true;
     }

     showConsoledata(){
    
            if(document.getElementById('temp') && document.getElementById('result'))
                {
                   let val_date = document.getElementById('temp').value;
                   eval(this.Exercice['solution']);
                }
         
     }
}