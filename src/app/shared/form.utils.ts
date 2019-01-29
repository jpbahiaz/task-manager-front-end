import { FormGroup } from "@angular/forms";

export class FormUtils{

    constructor(private form: FormGroup){}

    public showFieldError(fieldNAme: string): boolean{
        let field = this.getField(fieldNAme);
    
        return field.invalid && ( field.touched || field.dirty )
    }

    public fieldClassForErrorOrSuccess(fieldName: string){
        return {
            "has-error": this.showFieldError(fieldName),
            "has-success": this.getField(fieldName).valid
        }
    }

    public iconClassForErrorOrSuccess(fieldName: string){
        return {
            "glyphicon-remove": this.showFieldError(fieldName),
            "glyphicon-ok": this.getField(fieldName).valid
        }
    }

    public getField(fieldName: string){
        return this.form.get(fieldName);
    }
}