import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AotdComponent } from './aotd/aotd.component';
import { RecommendationComponent } from './recommendation/recommendation.component'


const routes: Routes = [
  { path: 'aotd', component: AotdComponent },
  { path: 'recommendation', component: RecommendationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
