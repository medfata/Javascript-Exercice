import { InjectionToken } from "@angular/core";

export enum MODES{
    CREATE, EDIT
}
export class sharedstate{
   constructor(public mode:MODES,public element?:any){}
}
export const SHARED_STATE = new InjectionToken("sharedstate");

export const CreatedElement = new InjectionToken('createdElement')

export class CElement{
    constructor(public Celement?:any, public Eelement?:any){}
}