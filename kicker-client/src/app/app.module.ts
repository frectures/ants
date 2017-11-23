import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EndstandComponent } from './endstand/endstand.component';
import { EndstandService } from './shared/endstand.service';
import { NewEndstandComponent } from './new-endstand/new-endstand.component';

@NgModule({
  declarations: [
    AppComponent,
    EndstandComponent,
    NewEndstandComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EndstandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
