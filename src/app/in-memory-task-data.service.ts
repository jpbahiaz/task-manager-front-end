import { Injectable } from "@angular/core";

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService{

    public createDb(){
        let tasks =  [
            { id: 1, title: 'Comprar celular' },
            { id: 2, title: 'Assistir aula de Rails' },
            { id: 3, title: 'Ser cabuloso' },
            { id: 4, title: 'Malhar e ficar mutante comer protein' },
            { id: 5, title: 'Assistir aula de Angular' },
            { id: 6, title: 'Descobrir os pwas' },
            { id: 7, title: 'Comer japa' },
        ]

        return { tasks }
    }

}