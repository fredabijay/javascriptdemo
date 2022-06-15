import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapreducefilterComponent } from './mapreducefilter/mapreducefilter.component';
import { DestructureComponent } from './destructure/destructure.component';
import { SpreadComponent } from './spread/spread.component';
import { AsyncawaitpromiseComponent } from './asyncawaitpromise/asyncawaitpromise.component';
import { ArraymethodsComponent } from './arraymethods/arraymethods.component';

@NgModule({
  declarations: [
    AppComponent,
    MapreducefilterComponent,
    DestructureComponent,
    SpreadComponent,
    AsyncawaitpromiseComponent,
    ArraymethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
