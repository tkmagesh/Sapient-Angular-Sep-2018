import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.services';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';

import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugDetailsComponent } from './bugTracker/views/bugDetails.component';

import { LoginComponent } from './bugTracker/auth/Login.component';

import {RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';

import { LoggedInGuard } from './bugTracker/auth/LoggedInGuard';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Bug } from './bugTracker/models/Bug';

//Routing

@Injectable({
    providedIn: 'root'
})
export class BugsResolver implements Resolve<Bug> {
  constructor(private bugService: BugServerService) { 
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> | Promise<Bug> | Bug {
    return this.bugService.get(route.paramMap.get('id')); 
  }
}



let routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'login', component : LoginComponent},
    {path : 'add', component : BugEditComponent},
    {path : 'details/:id', component : BugDetailsComponent, resolve: {
        bugs: BugsResolver
      }
     },
    {path : 'bugs', component : BugTrackerComponent, 
      canActivate : [LoggedInGuard]}
]

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
    , BugDetailsComponent
    , LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
    , BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
