import { LastRecallComponent } from './components/last-recall/last-recall.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizationComponent } from './components/visualization/visualization.component';

const routes: Routes = [
  {
    path: '',
    component: LastRecallComponent
  },
  {
    path: 'viz',
    component: VisualizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
