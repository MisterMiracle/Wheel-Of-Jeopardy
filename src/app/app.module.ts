import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './services/category.service';
import { AdministratorComponent } from './administrator/administrator.component';
import { WheelOfJeopardyComponent } from './wheel-of-jeopardy/wheel-of-jeopardy.component';
import {DataService} from './services/data.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AppNavbarComponent,
    AdministratorComponent,
    WheelOfJeopardyComponent
  ],
  providers: [ CategoryService, DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
