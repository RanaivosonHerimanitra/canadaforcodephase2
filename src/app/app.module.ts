import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { LastRecallComponent } from './components/last-recall/last-recall.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TopMostRecallComponent } from './components/top-most-recall/top-most-recall.component';
import { LastRecallDetailsComponent } from './components/last-recall-details/last-recall-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
    LastRecallComponent,
    SpinnerComponent,
    TopMostRecallComponent,
    LastRecallDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
