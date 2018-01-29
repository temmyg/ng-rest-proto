import { Component } from '@angular/core';

@Component({
    selector: 'param-form',
    templateUrl: 'param-form.component.html',
    styleUrls: ["param-form.component.css"]
})
export class ParamFormComponent {
    public params : Params = new Params("Jonathan", "Karteli");

    ParamFormComponent(){
        this.params = new Params("Jonathan", "Karteli");
    }
}


export class Params {
    constructor(public firstName: string, public lastName: string){

    }
}