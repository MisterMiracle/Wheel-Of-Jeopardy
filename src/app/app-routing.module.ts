import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AdministratorComponent} from './administrator/administrator.component'
import { WheelOfJeopardyComponent} from './wheel-of-jeopardy/wheel-of-jeopardy.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'game', component: WheelOfJeopardyComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
