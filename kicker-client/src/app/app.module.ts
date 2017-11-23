import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EndstandComponent } from './endstand/endstand.component';
import { EndstandService } from './shared/endstand.service';

@NgModule({
  declarations: [
    AppComponent,
    EndstandComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EndstandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
