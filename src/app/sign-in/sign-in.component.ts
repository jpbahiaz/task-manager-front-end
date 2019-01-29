import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { FormUtils } from "app/shared/form.utils";

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent{
    public form: FormGroup;
    public formUtils: FormUtils;

    constructor(private formBuilder: FormBuilder){
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });

        this.formUtils = new FormUtils(this.form);
    }

    public signInUser(){
        console.log("Formulário de SignIn foi enviado!")
        console.log(this.form.value)
    }
}