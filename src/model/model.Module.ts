import { NgModule } from "@angular/core";

import {HttpClientModule} from "@angular/common/http";
import { Rstdatasource } from "./rest.datasource";
import { Local } from "protractor/built/driverProviders";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports:[HttpClientModule,FormsModule,ReactiveFormsModule],
    providers:[Rstdatasource]
})
export class ModelModule{}