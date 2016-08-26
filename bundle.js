var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/HTML/Header.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("body.component", ['angular2/core', "app.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, app_component_1;
    var BodyComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            BodyComponent = (function () {
                function BodyComponent() {
                }
                BodyComponent = __decorate([
                    core_2.Component({
                        selector: 'my-body',
                        templateUrl: '/HTML/Body.html',
                        directives: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BodyComponent);
                return BodyComponent;
            }());
            exports_2("BodyComponent", BodyComponent);
        }
    }
});
System.register("contactbody.component", ['angular2/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var ContactBodyComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            ContactBodyComponent = (function () {
                function ContactBodyComponent() {
                }
                ContactBodyComponent = __decorate([
                    core_3.Component({
                        selector: 'my-contact',
                        templateUrl: '/HTML/contact.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactBodyComponent);
                return ContactBodyComponent;
            }());
            exports_3("ContactBodyComponent", ContactBodyComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "body.component", "contactbody.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_2, body_component_1, contactbody_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (contactbody_component_1_1) {
                contactbody_component_1 = contactbody_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_2.AppComponent);
            browser_1.bootstrap(body_component_1.BodyComponent);
            browser_1.bootstrap(contactbody_component_1.ContactBodyComponent);
        }
    }
});
//# sourceMappingURL=bundle.js.map