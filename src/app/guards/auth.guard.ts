import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthService } from "app/shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router){ }

    public canActivate(){
        if(this.authService.userSignIn()){
            return true
        }else{
            this.router.navigate(['/sign-in']);
            return false;
        }
    }

}