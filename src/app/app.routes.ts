import { Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ComputerSienceComponent } from './computer-sience/computer-sience.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarrySkyComponent } from './starry-sky/starry-sky.component';


export const routes: Routes = [
  { path: '', redirectTo: '/frontPage', pathMatch: 'full' },
  { path: 'computer-sience', component: ComputerSienceComponent },
  { path: 'starrySky', component: StarrySkyComponent },
  { path: 'frontPage', component: FrontPageComponent },
  { path: 'topics', component: TopicsComponent },
  { path: '**', component: PageNotFoundComponent },



];
//reititys sivulta toiselle
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Ladataan reitit
  exports: [RouterModule]
})
export class AppRoutingModule { }