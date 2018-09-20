import { Component } from '@angular/core';
import { SocketService } from './utils/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = '';
  constructor(private socketService : SocketService){

  }

  ngOnInit(){
		this.socketService.initSocket();

	    this.socketService.onMessage()
	      .subscribe((message: string) => {
	        this.message = message;
	      });

		
	}
}
