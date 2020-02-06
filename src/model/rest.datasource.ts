import { Injectable, InjectionToken, inject, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExerciceModel } from "./exercice.model";
import { TpModel } from "./tp.model";
import { AdminModel } from "./Admin.model";


//export const REST_URL_Tps = new InjectionToken("rest_url_tps");
@Injectable()
export class Rstdatasource{

    constructor(private http?:HttpClient){}

    addExercice(Ex:ExerciceModel):Observable<ExerciceModel>{
      return this.http.post<any>("http://localhost:3000/Exercices",Ex)
    }

    addTp(tp:TpModel):Observable<TpModel>{
      return this.http.post<any>("http://localhost:3000/Tps",tp);
    }

    addAdmin(ad:AdminModel):Observable<AdminModel>{
      return  this.http.post<any>("http://localhost:3000/Admins",ad);
    }
  getExercices(): Observable<ExerciceModel[]>{
    return this.http.get<any[]>('http://localhost:3000/Exercices');
  }

  getTps():Observable<TpModel[]>{
    return this.http.get<TpModel[]>('http://localhost:3000/Tps');
  }

  getAdmins():Observable<AdminModel[]>{
    return this.http.get<AdminModel[]>('http://localhost:3000/Admins')
  }

  editAdmin(admin:AdminModel):Observable<AdminModel>{
    return this.http.put<AdminModel>(`http://localhost:3000/Admins/${admin['id']}`,admin);
  }

  editTp(tp:TpModel):Observable<TpModel>{
    return this.http.put<TpModel>(`http://localhost:3000/Tps/${tp['id']}`,tp);
  }
  editExercice(ex:ExerciceModel):Observable<ExerciceModel>{
    return this.http.put<ExerciceModel>(`http://localhost:3000/Exercices/${ex['id']}`,ex);
  }

  deletAdmin(admin:AdminModel):Observable<AdminModel>{
   return this.http.delete<AdminModel>(`http://localhost:3000/Admins/${admin['id']}`)
  }

  deleteTp(tp:TpModel):Observable<TpModel>{
    return this.http.delete<TpModel>(`http://localhost:3000/Tps/${tp['id']}`)
  }
  
  deleteExercice(Exercice:ExerciceModel):Observable<ExerciceModel>{
    return this.http.delete<ExerciceModel>(`http://localhost:3000/Exercices/${Exercice['id']}`)
  }
}