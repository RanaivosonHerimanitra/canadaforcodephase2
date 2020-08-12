import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { LastRecallComponent } from './components/last-recall/last-recall.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TopMostRecallComponent } from './components/top-most-recall/top-most-recall.component';
import { LastRecallDetailsComponent } from './components/last-recall-details/last-recall-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecallSearchComponent } from './components/recall-search/recall-search.component';
import { InstantRecallSearchComponent } from './components/instant-recall-search/instant-recall-search.component';
import { Recall15Component } from './components/recall15/recall15.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationComponent,
    LastRecallComponent,
    SpinnerComponent,
    TopMostRecallComponent,
    LastRecallDetailsComponent,
    RecallSearchComponent,
    InstantRecallSearchComponent,
    Recall15Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatTableModule, MatButtonModule, MatSelectModule, MatIconModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
