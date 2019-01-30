import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "app/shared/auth.service";
import { FormUtils } from "../shared/form.utils";
import { User } from "app/shared/user.model";


@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent{
    public userForm: FormGroup;
    public formUtils: FormUtils;

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService){
        this.setupForm();
        this.formUtils = new FormUtils(this.userForm);
    }

    public signUpUser(){
        this.authService.signUp(this.userForm.value as User)
            .subscribe(
                () => {
                    alert('Parabéns, sua conta foi criada com sucesso!')
                    this.router.navigate(['/dashboard'])
                }
            )
    }

    public passwordConfirmationValidator(form: FormGroup){
        if (form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value)
            form.get('passwordConfirmation').setErrors(null);
        else
            form.get('passwordConfirmation').setErrors({'mismatch': true});
    }

    private setupForm(){
        this.userForm = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required, Validators.minLength(8)]],
            passwordConfirmation: [null, [Validators.required]]
        }, { validator: this.passwordConfirmationValidator})
    }
}