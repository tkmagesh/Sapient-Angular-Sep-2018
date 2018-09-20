import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

import { SocketService } from './services/socket.service';

@NgModule({
	declarations : [
		TrimTextPipe,
		SortPipe,
		ElapsedPipe
	],
	providers : [
		SocketService
	],
	imports : [],
	exports : [
		TrimTextPipe,
		SortPipe,
		ElapsedPipe
	]
})
export class UtilsModule{

}