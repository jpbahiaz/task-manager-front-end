import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";


@Injectable()
export class AuthService {

    constructor(private tokenService: Angular2TokenService){}

    public signUp(user: User){
        // Call Angular2-Token SignUp method here!
        // returns an Observable<Response>
    }

    public signIn(uid: string, password: string){
        // Call Angular2-Token SignIn method here!
        // returns an Observable<Response>
    }

    public signOut(){
        // Call Angular2-Token SignIn method here!
        // returns an Observable<Response>
    }

    public isSignedIn(){
        // Call Angular2-Token userSignIn method here!
        // returns an Boolean
    }

    private handleErrors(error: Response){
        console.log("Salvando o erro em um arquivo de log - Detalhes do erro => ", error)
        return Observable.throw(error)
    }
}