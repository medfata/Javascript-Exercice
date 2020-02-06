import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from 'src/Core/Core.Module';
import { routing } from './app.routes';
import { AdminComp } from 'src/Core/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
