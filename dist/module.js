var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var messages_component_1 = require("./messages.component");
var config_1 = require("./config");
var Ng2MDFValidationMessagesModule = Ng2MDFValidationMessagesModule_1 = (function () {
    function Ng2MDFValidationMessagesModule() {
    }
    /**
     * Configure global values for the module.
     * @param configObject Object with custom global configurations. E.g. { defaultErrorMessages: { required: 'Default Custom Required Message' }}
     */
    Ng2MDFValidationMessagesModule.globalConfig = function (configObject) {
        return {
            ngModule: Ng2MDFValidationMessagesModule_1,
            providers: [
                {
                    provide: config_1.ValidationMessagesConfiguration,
                    useValue: configObject
                }
            ]
        };
    };
    return Ng2MDFValidationMessagesModule;
}());
Ng2MDFValidationMessagesModule = Ng2MDFValidationMessagesModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [
            messages_component_1.ValidationMessageComponent
        ],
        exports: [
            messages_component_1.ValidationMessageComponent
        ],
    })
], Ng2MDFValidationMessagesModule);
exports.Ng2MDFValidationMessagesModule = Ng2MDFValidationMessagesModule;
var Ng2MDFValidationMessagesModule_1;
//# sourceMappingURL=module.js.map