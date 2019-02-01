import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";


@Injectable()
export class AuthService {

    constructor(private tokenService: Angular2TokenService){}

    public signUp(user: User): Observable<Response>{
        return this.tokenService.registerAccount(user as any)
            .catch(this.handleErrors)
    }

    public signIn(uid: string, password: string){
        // Call Angular2-Token SignIn method here!
        // returns an Observable<Response>
    }

    public signOut(): Observable<Response>{
        return this.tokenService.signOut()
            .catch(this.handleErrors);
    }

    public userSignedIn(): boolean{
        return this.tokenService.userSignedIn();
    }

    private handleErrors(error: Response){
        console.log("Salvando o erro em um arquivo de log - Detalhes do erro => ", error)
        return Observable.throw(error)
    }
}