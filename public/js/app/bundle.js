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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib2R5LmNvbXBvbmVudC50cyIsImNvbnRhY3Rib2R5LmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQTtnQkFFQSxDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRyxtQkFBbUI7cUJBQ3BDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNFRDtnQkFBQTtnQkFFQSxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFdBQVcsRUFBRyxpQkFBaUI7d0JBQy9CLFVBQVUsRUFBRSxDQUFDLDRCQUFZLENBQUM7cUJBQzdCLENBQUM7O2lDQUFBO2dCQUdGLG9CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx5Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNORDtnQkFBQTtnQkFFQSxDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRyxvQkFBb0I7cUJBQ3JDLENBQUM7O3dDQUFBO2dCQUdGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0pELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDO1lBQ3hCLG1CQUFTLENBQUMsOEJBQWEsQ0FBQyxDQUFDO1lBQ3pCLG1CQUFTLENBQUMsNENBQW9CLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9SZXN1bWVCYXNpYy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAgJy9IVE1ML0hlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQ2hpbVdoYSBvbiAyMDE2LTA4LTI0LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnR7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYm9keScsXHJcbiAgICB0ZW1wbGF0ZVVybDogICcvSFRNTC9Cb2R5Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvZHlDb21wb25lbnQge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb250YWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAgJy9IVE1ML2NvbnRhY3QuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Qm9keUNvbXBvbmVudCB7XHJcblxyXG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Qm9keUNvbXBvbmVudH0gZnJvbSBcIi4vYm9keS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdEJvZHlDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3Rib2R5LmNvbXBvbmVudFwiO1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7XG5ib290c3RyYXAoQm9keUNvbXBvbmVudCk7XG5ib290c3RyYXAoQ29udGFjdEJvZHlDb21wb25lbnQpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
