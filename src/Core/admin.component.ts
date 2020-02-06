import { Component, Inject, Input, SimpleChange } from "@angular/core";
import { Rstdatasource } from "src/model/rest.datasource";
import { ExerciceModel } from "src/model/exercice.model";
import { TpModel } from "src/model/tp.model";
import { AdminModel } from "src/model/Admin.model";
import { element } from "@angular/core/src/render3/instructions";
import { TpFormGroup, ExerciceFormGroup, AdminFormGroup } from "src/model/form.model";
import{NgForm}from "@angular/forms";
import { Observable } from "rxjs";

@Component({
    templateUrl:'admin.template.html',
    selector:'<admin></admin>'
})
export class AdminComp{
  
    
    selectedValue:string ="";
    
   

}