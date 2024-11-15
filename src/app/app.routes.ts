import { Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'topics', component: TopicsComponent },
  { path: '**', component: PageNotFoundComponent }

];
