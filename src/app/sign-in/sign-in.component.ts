import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "app/shared/auth.service";
import { FormUtils } from "app/shared/form.utils";

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent{
    public form: FormGroup;
    public formUtils: FormUtils;
    public submitted: boolean;
    public formErrors: string[];

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router){
        this.setupForm();
        this.formUtils = new FormUtils(this.form);
        this.submitted = false;
        this.formErrors = null;
    }

    public signInUser(){
        this.submitted = true;
        this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
            .subscribe(
                () => {
                    this.router.navigate(['/dashboard'])
                    this.formErrors = null;
                },
                (error) => {
                    this.submitted = false;
                    if(error.status === 401)
                        this.formErrors = JSON.parse(error._body).errors
                    else
                        this.formErrors = ["Não foi possível processar a sua solicitação. Por favor tente mais tarde"]
                        
                }
            )
    }

    private setupForm(){
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });
    }
}