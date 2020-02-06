import { Component, Input, SimpleChange, Output,EventEmitter, Inject } from "@angular/core";
import { Rstdatasource } from "src/model/rest.datasource";
import { ExerciceModel } from "src/model/exercice.model";
import { TpModel } from "src/model/tp.model";
import { AdminModel } from "src/model/Admin.model";
import { sharedstate, MODES, SHARED_STATE, CElement, CreatedElement } from "./sharedstate";
import { Observable, Observer } from "rxjs";


@Component({
    selector:"tableAdmin",
    templateUrl:"tableAdmin.template.html"
})
export class TableAdmin{

    Exercices?:ExerciceModel[] = new Array();
    Tps?:TpModel[]= new Array();
    Admins?:AdminModel[] = new Array();

    constructor(private data:Rstdatasource,@Inject(SHARED_STATE) private observer:Observer<sharedstate>, @Inject(CreatedElement) private createdElement?:Observable<CElement>){
        this.data.getTps().subscribe(restdaat => this.Tps =  restdaat)
        this.data.getExercices().subscribe(restdaat => this.Exercices =  restdaat)
        this.data.getAdmins().subscribe(restdaat => this.Admins =  restdaat)

        this.createdElement.subscribe(newElement => {
            
            if(this.chosenvalue =="Exercice"){
                    if(newElement.Celement !=null){
                this.Exercices.push(newElement.Celement)
                this.tBody = this.Exercices;}else{
                    let index = this.Exercices.findIndex(ex => ex['id'] == newElement.Eelement['id']);
                    this.Exercices.splice(index,1,newElement.Eelement)
                }
            }else if(this.chosenvalue =="Tp"){
                    if(newElement.Celement != null){
                this.Tps.push(newElement.Celement)
                this.tBody = this.Tps}else{
                    let index = this.Tps.findIndex(ex => ex['id'] == newElement.Eelement['id']);
                    this.Tps.splice(index,1,newElement.Eelement)
                }
            }else if(this.chosenvalue =="Admin"){
                    if(newElement.Celement != null){
                this.Admins.push(newElement.Celement)
                this.tBody = this.Admins}else{
                    let index = this.Admins.findIndex(ex => ex['id'] == newElement.Eelement['id']);
                    this.Admins.splice(index,1,newElement.Eelement) 
                }
            
            }
    
        })


    }
    @Input("selectedValue")
    chosenvalue?:string;
    tHead = new Array<string>();
    tBody = new Array<any>();



    ngOnChanges(changes:{[property:string]: SimpleChange}){
        let change = changes["chosenvalue"];
        if(!change.isFirstChange() && change.currentValue != change.previousValue){
            if(this.chosenvalue == "Exercice"){
                this.tHead = Object.keys(this.Exercices[0]);
                this.tHead.splice(this.tHead.length-2, 2);
                this.tBody = this.Exercices;
            
                
            }else if(this.chosenvalue =="Tp"){
               this.tHead =Object.keys(this.Tps[0]);
               this.tBody = this.Tps;
 
            }else if(this.chosenvalue =="Admin") {
                this.tHead = Object.keys(this.Admins[0]);
                this.tBody = this.Admins;
          
            }
        }
        

        
    }

    edit(element:any){
        this.observer.next(new sharedstate(MODES.EDIT,element))
    }
    create(){
        this.observer.next(new sharedstate(MODES.CREATE))
    }
    delete(element:any){

        if(this.chosenvalue =="Exercice"){
            this.data.deleteExercice(element).subscribe(data => {
                let index =  this.Exercices.findIndex(ex => ex['id'] == element['id'] );
                  if(index>-1){
                      this.Exercices.splice(index,1)
                      this.tBody = this.Exercices;
                  }
              });
        }else if(this.chosenvalue =="Tp"){
            this.data.deleteTp(element).subscribe(data => {
                let index =  this.Tps.findIndex(ex => ex['id'] == element['id'] );
                  if(index>-1){
                      this.Tps.splice(index,1)
                      this.tBody = this.Tps;
                  }
              });
        }else if(this.chosenvalue =="Admin"){
            this.data.deletAdmin(element).subscribe(data => {
                let index =  this.Admins.findIndex(ex => ex['id'] == element['id'] );
                  if(index>-1){
                      this.Admins.splice(index,1)
                      this.tBody = this.Admins;
                  }
              });
        }
    }
}