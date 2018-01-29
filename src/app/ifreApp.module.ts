import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './views/main-page/main.component';
import { ParamFormComponent } from './views/param-form/param-form.compnent';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ MainComponent, ParamFormComponent ],
    providers: [],
    bootstrap: [MainComponent] 
})
export class IfreAppModule {

}