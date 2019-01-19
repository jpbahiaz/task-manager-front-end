import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

// Tratando erros
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";


@Injectable()
export class LearningObservables {

    constructor(private http: Http){
        
        // Criando objeto observador

        let observer = {
            next: function(newData){
                console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
            },
            error: function(errorData){
                console.log("Chamou o método next e passou como parâmetro o 'errorData' => ", errorData);
            },
            complete: function(){
                console.log("Chamou o método complete e encerrou");
            }
        };

         // Criando objeto observador (usando arrow functions)

        //  let arrowOobserver = {
        //     next: (newData) => {
        //         console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
        //     },
        //     error: (errorData) => {
        //         console.log("Chamou o método next e passou como parâmetro o 'errorData' => ", errorData);
        //     },
        //     complete: () => {
        //         console.log("Chamou o método complete e encerrou");
        //     }
        // };

        // Criando objeto observado e passando um observador como parâmetro
        // this.http.get("api/tasks")
        //     .subscribe(observer);

        // Criando objeto observado e criando um observador no parâmetro
        // this.http.get("api/tasks")
        //     .subscribe({
        //         next: function(newData){
        //             console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
        //         },
        //         error: function(errorData){
        //             console.log("Chamou o método next e passou como parâmetro o 'errorData' => ", errorData);
        //         },
        //         complete: function(){
        //             console.log("Chamou o método complete e encerrou");
        //         }
        //     });

        // Passando os métodos (next, error, complete) diretamente como parâmetro
        // this.http.get("api/tasks")
        //     .subscribe(
        //         function(newData){
        //             console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
        //         },
        //         function(errorData){
        //             console.log("Chamou o método next e passou como parâmetro o 'errorData' => ", errorData);
        //         },
        //         function(){
        //             console.log("Chamou o método complete e encerrou");
        //         }
        //     );

        // Passando os métodos (next, error, complete) diretamente como parâmetro (usando arrow functions)
        this.http.get("api/tasks")
            .catch(this.handleErrors)
            .subscribe(
                {
                    next: (newData) => {
                        console.log("Chamou o método next e passou como parâmetro o 'newData' => ", newData);
                    },
                    error: (errorData) => {
                        alert("Ocorreu um erro no servidor, por favor tente mais tarde.")
                    },
                    complete: () => {
                        console.log("Chamou o método complete e encerrou");
                    }
                }
            );
    }

    public handleErrors(error: Response){
        console.log('Salvando erro no banco de dados para o desenvolvedor => ', error)
        return Observable.throw(error)
    }
}