import { Directive, Input, HostBinding, Output, HostListener, ElementRef } from "@angular/core";
import { EventEmitter } from "protractor";
import { ExerciceModel } from "src/model/exercice.model";

@Directive({
    selector:"[Ex-attr]",
})
export class ExerciceDirective{

    constructor(private element?:ElementRef){
        this.element.nativeElement.addEventListener('click', (e)=> console.log("button with show id has been triggerd"));
    }

    @Input("Ex-attr")
    @HostBinding("id")
    ExerciceId:string;

    @Input("Ex-name")
    @HostBinding("value")
    private name?:string;
    @Input("EX-password")
    @HostBinding("value")
    private password?:string;


   
}