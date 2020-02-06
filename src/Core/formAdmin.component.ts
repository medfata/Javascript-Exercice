import { Component, Input, SimpleChange, Inject } from "@angular/core";
import { AdminFormGroup, ExerciceFormGroup, TpFormGroup } from "src/model/form.model";
import { Form, FormGroup, NgForm } from "@angular/forms";
import { sharedstate, MODES, SHARED_STATE, CreatedElement, CElement } from "./sharedstate";
import { Observable, Observer } from "rxjs";
import { ExerciceModel } from "src/model/exercice.model";
import { TpModel } from "src/model/tp.model";
import { AdminModel } from "src/model/Admin.model";
import { Rstdatasource } from "src/model/rest.datasource";

@Component({
    selector:"formAdmin",
    templateUrl:"formAdmin.temaplte.html"
})
export class FormAdmin{

    constructor(@Inject(SHARED_STATE) private state:Observable<sharedstate>,private data:Rstdatasource,@Inject(CreatedElement) private observer?:Observer<CElement>){
        this.state.subscribe((update)=> {
            if(update.element != undefined){
                Object.assign(this.Element, update.element);
               
            }
            this.editing = update.mode == MODES.EDIT;
        })

    }
    private AdminForm:AdminFormGroup = new AdminFormGroup();
    private ExerciceForm:ExerciceFormGroup   = new ExerciceFormGroup();
    private TpForm:TpFormGroup = new TpFormGroup();

    Element:any;
    
    editing:boolean = false;
    

    @Input()
    chosevalue?:string = "";
   
    form?:FormGroup;

    ngOnChanges(changes:{[property:string]:SimpleChange}){
        let chosenChnage = changes["chosevalue"];
        if(chosenChnage.currentValue != chosenChnage.previousValue){
            //this.mode = modeChange.currentValue;
            if(chosenChnage.currentValue == "Exercice"){
                this.form = this.ExerciceForm; 
                this.Element = new ExerciceModel();
            }else if(chosenChnage.currentValue =="Tp"){
                this.form = this.TpForm;
                this.Element = new TpModel();
            }else if(chosenChnage.currentValue =="Admin"){
                this.form = this.AdminForm;
                this.Element = new AdminModel();
            }
         } 
    }
    formsubmitted:boolean = false;

    creatEdit(Element, form:NgForm){
        this.formsubmitted = true;

        if(form.valid){
        if(Element['id']!=undefined){

            this.observer.next(new CElement(null, this.Element))
             if(this.chosevalue=="Exercice") this.Element = new ExerciceModel();
             else if(this.chosevalue =="Tp") this.Element = new TpModel();
             this.editing = false;
        
        }else{
            if(this.chosevalue =="Exercice")
            this.data.addExercice(Element).subscribe(newElement => this.observer.next(new CElement(newElement)) );
            else if(this.chosevalue =="Tp")
            this.data.addTp(Element).subscribe(newElement => this.observer.next(new CElement(newElement)));
            else if(this.chosevalue)
            this.data.addAdmin(Element).subscribe(newElement => this.observer.next(new CElement(newElement)));
        }
    }
  
}

}