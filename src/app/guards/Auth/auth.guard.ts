import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

	constructor(public router:Router){

	}

	canActivate():Observable<boolean> | Promise<boolean> | boolean{
				return this.router.navigate(['/home'])
			}
	}
