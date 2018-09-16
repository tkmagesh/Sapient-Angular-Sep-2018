import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn : 'root'
})
export class UserService{
	isLoggedIn(){
		return false;
	}
}


@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
	constructor(private router: Router, private userService: UserService) {
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean>|Promise<boolean>|boolean {
		const loggedIn = this.userService.isLoggedIn(); 
		if (!loggedIn) {
			this.router.navigate(['/login']); 
			console.log(loggedIn);
		}
		return loggedIn; 
	}
}