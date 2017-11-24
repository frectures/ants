import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EndstandComponent } from './endstand/endstand.component';
import { EndstandService } from './shared/endstand.service';
import { NewEndstandComponent } from './new-endstand/new-endstand.component';
import { EndstandOutletComponent } from './endstand-outlet/endstand-outlet.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', component: EndstandOutletComponent },
  { path: 'rankings', component: RankingsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EndstandComponent,
    NewEndstandComponent,
    EndstandOutletComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [EndstandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
