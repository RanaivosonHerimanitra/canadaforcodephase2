import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { LastRecallComponent } from './components/last-recall/last-recall.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
    LastRecallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
