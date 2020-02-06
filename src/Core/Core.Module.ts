import { NgModule } from "@angular/core";
import { ParentTemplate } from "./ParentTemplate.component";
import { ModelModule } from "src/model/model.Module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExerciceDirective } from "./ExerciceDir.directive";
import { ExerciceComp } from "./Exercice.component";
import { AdminComp } from "./admin.component";
import { RouterModule } from "@angular/router";
import { TableAdmin } from "./tableAdmin.component";
import { FormAdmin } from "./formAdmin.component";
import { SHARED_STATE, sharedstate, CreatedElement, CElement } from "./sharedstate";
import { Subject } from "rxjs";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule,ReactiveFormsModule],
    declarations:[ParentTemplate,ExerciceDirective,ExerciceComp,AdminComp,TableAdmin,FormAdmin],
    exports: [ParentTemplate],
    providers:[{provide: SHARED_STATE, useValue: new Subject<sharedstate>()},
            {provide:CreatedElement, useValue: new Subject<CElement>()}]
})
export class CoreModule{}