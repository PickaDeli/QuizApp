import { Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/frontPage', pathMatch: 'full' },
  { path: 'frontPage', component: FrontPageComponent },
  { path: 'topics', component: TopicsComponent },
  { path: '**', component: PageNotFoundComponent }


];
