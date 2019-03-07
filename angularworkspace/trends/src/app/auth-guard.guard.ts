import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router,CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
// import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
