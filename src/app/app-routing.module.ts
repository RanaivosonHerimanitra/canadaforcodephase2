import { InstantRecallSearchComponent } from './components/instant-recall-search/instant-recall-search.component';
import { RecallSearchComponent } from './components/recall-search/recall-search.component';
import { LastRecallDetailsComponent } from './components/last-recall-details/last-recall-details.component';
import { TopMostRecallComponent } from './components/top-most-recall/top-most-recall.component';
import { LastRecallComponent } from './components/last-recall/last-recall.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { Recall15Component } from './components/recall15/recall15.component';

const routes: Routes = [
  {
    path: 'recall15',
    component: Recall15Component
  },
  {
    path: 'instant-recall-search',
    component: InstantRecallSearchComponent
  },
  {
    path: '',
    component: LastRecallComponent
  },
  {
    path: 'last-recall-detail/:recallID',
    component: LastRecallDetailsComponent
  },
  {
    path: 'viz',
    component: VisualizationComponent
  },
  {
    path: 'search-recall',
    component: RecallSearchComponent
  },
  {
    path: 'top-most-recall/:id',
    component: TopMostRecallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
