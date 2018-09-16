import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/BugStats.component';
import { BugEditComponent } from './bugTracker/views/BugEdit.component';

import { IBugOperations } from './bugTracker/contracts/IBugOperations';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

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
    , BugEditComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
     { provide : BugOperationsService, useClass : BugOperationsService },
     BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
