import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent{
    public userForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.userForm = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(100)]],
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required, Validators.minLength(8)]],
            passwordConfirmation: [null, [Validators.required]]
        })
    }

    public signUpUser(){
        console.log("Formulário de sign up enviado!")
        console.log(this.userForm.value)
    }
}