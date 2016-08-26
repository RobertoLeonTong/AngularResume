///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {BodyComponent} from "./body.component";
import {ContactBodyComponent} from "./contactbody.component";
bootstrap(AppComponent);
bootstrap(BodyComponent);
bootstrap(ContactBodyComponent);