import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/BugStats.component';

import { IBugOperations } from './bugTracker/contracts/IBugOperations';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';

/*function bugOperationsServiceFactory(){
  let bugOperationsService = {
    createNew(){
      return { name : 'Dummy', isClosed : false}
    },
    toggle(){

    }
  }
  return bugOperationsService;
 }*/


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     { provide : BugOperationsService, useClass : BugOperationsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
