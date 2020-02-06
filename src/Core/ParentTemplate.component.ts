
import { TpModel } from "src/model/tp.model";
import { ExerciceModel } from "src/model/exercice.model";
import { Component, Input, HostBinding } from "@angular/core";
import { Rstdatasource } from "src/model/rest.datasource";
import { ModelModule } from "src/model/model.Module";
import { Element } from "@angular/compiler";
import { AdminModel } from "src/model/Admin.model";
import { ExerciceDirective } from "./ExerciceDir.directive";

@Component({
    selector:"parentTemp",
    templateUrl:"Parent.Template.html"
})

export class ParentTemplate{
    private exercices:ModelModule[] = new Array<ExerciceModel>();
    private tps:TpModel[]= new Array<TpModel>();
    private ExerciceTp?:ModelModule[] = new Array<ExerciceModel>();
    private Exercice?:ModelModule;
    private Admins?:AdminModel[];
    private Admin?:AdminModel;
    private name?:string;
    private password?:string;
    constructor(private restdata:Rstdatasource){
       
        this.restdata.getExercices().subscribe(rstdata=> this.exercices = rstdata );
        this.restdata.getTps().subscribe(tpdata=> this.tps = tpdata);
        this.restdata.getAdmins().subscribe(data=> this.Admins = data);
    }

    getExerciceByTp(Tpid?:number){
        this.ExerciceTp =[];
        this.ExerciceTp = this.exercices.filter(Ex=> Ex["tp"]==Tpid);
    }
    getExercice(ExId:number){
        if(this.ExerciceTp.length>0){
            this.Exercice = this.ExerciceTp.find(ex=> ex['id'] == ExId);
        }
         
    }

    getAdmin(name?,password?){
        if(this.name == null || this.password==null){
        alert("Enter the name and password to connect !")} 
        else{this.Admin= this.Admins.find(admin => admin['password'] == password);
        
        if(this.Admin ==null){
            alert("the name or the password are not correct please try again with the apropriate informations !")
        }else{
            alert(`${this.Admin['name']} your are connected`);
        } 
        }

      
       
    }

}