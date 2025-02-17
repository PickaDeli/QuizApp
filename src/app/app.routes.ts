import { Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ComputerSienceComponent } from './computer-sience/computer-sience.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarrySkyComponent } from './starry-sky/starry-sky.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { GeneralComponent } from './general/general.component';
import { GeographyComponent } from './geography/geography.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { RandomComponent } from './random/random.component';


export const routes: Routes = [
  { path: '', redirectTo: '/frontPage', pathMatch: 'full' },
  { path: 'computer-sience', component: ComputerSienceComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'cartoons', component: CartoonsComponent },
  { path: 'random', component: RandomComponent },
  { path: 'starrySky', component: StarrySkyComponent },
  { path: 'frontPage', component: FrontPageComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'finalPage', component: FinalPageComponent },
  { path: '**', component: PageNotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
