import { FormControl, FormGroup, Validators, Form } from "@angular/forms";


export class formControl extends FormControl{
    label :string;
    modelProperty:string;
    constructor(label:string,property:string,value:any,validator:any){
        super(value,validator);
        this.label = label;
        this.modelProperty = property;
    }
    getvalidationMessages(){
        let messages:string[]=[];
        if(this.errors){
            for(let errorName in this.errors){
                switch(errorName){
                    case "required":
                    messages.push(`you have to enter a ${this.label}`);
                }
            }
        }
        return messages;
    }
}

export class AdminFormGroup extends FormGroup{
    constructor(){
        super({
            name: new formControl("Name","name","",Validators.required),
            password: new formControl("Password","password","",Validators.required)
        })
    }
    getControls():formControl[]{
        return  Object.keys(this.controls).map(c => this.controls[c] as formControl);
    }
    getFormValidationMessages(form:Form):string[]{
        let messages:string[] =[];
        this.getControls().forEach(c => c.getvalidationMessages().forEach(m => messages.push(m)));
        return messages;
    }
}

export class TpFormGroup extends FormGroup{
    constructor(){
        super({
           
            name : new formControl("Name","name","",Validators.required),
        })
    }
    getControls():formControl[]{
        return  Object.keys(this.controls).map(c => this.controls[c] as formControl);
    }
    
    getFormValidationMessages(form:Form):string[]{
        let messages:string[] =[];
        this.getControls().forEach(c => c.getvalidationMessages().forEach(m => messages.push(m)));
        return messages;
    }
}
export class ExerciceFormGroup extends FormGroup{

    constructor(){
        super({
            name : new formControl("Name","name","",Validators.required),
            tp: new formControl('Tp','tp',"",Validators.required),
            descreption : new formControl("Descreption","descreption","",Validators.required),
                
        })
    }
    getControls():formControl[]{
        return  Object.keys(this.controls).map(c => this.controls[c] as formControl);
    }

    getFormValidationMessages(form:Form):string[]{
        let messages:string[] =[];
        this.getControls().forEach(c => c.getvalidationMessages().forEach(m => messages.push(m)));
        return messages;
    }

 
}