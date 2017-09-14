var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var config_1 = require("./config");
var message_provider_1 = require("./message-provider");
var ValidationMessageComponent = (function () {
    function ValidationMessageComponent(customConfig) {
        this.customConfig = customConfig;
        this.config = Object.assign({}, config_1.defaultConfig);
        if (customConfig) {
            this.config = Object.assign({}, config_1.defaultConfig, customConfig);
        }
        var errorMessages = Object.assign({}, config_1.defaultConfig.defaultErrorMessages, this.config.defaultErrorMessages);
        this.messageProvider = new message_provider_1.MessageProvider(errorMessages);
    }
    ValidationMessageComponent.prototype.ngOnInit = function () {
        this._mergeWithLocalConfiguration();
    };
    Object.defineProperty(ValidationMessageComponent.prototype, "errorMessage", {
        get: function () {
            for (var errorPropertyName in this.control.errors) {
                return this.messageProvider.getErrorMessage(errorPropertyName, this.control.errors[errorPropertyName]);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Merge instance specific configuration with the default and/or custom one.
     */
    ValidationMessageComponent.prototype._mergeWithLocalConfiguration = function () {
        if (this.class) {
            this.config.class = this.class;
        }
    };
    return ValidationMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], ValidationMessageComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ValidationMessageComponent.prototype, "class", void 0);
ValidationMessageComponent = __decorate([
    core_1.Component({
        selector: 'ng2-mdf-validation-message',
        template: '<span *ngIf="errorMessage !== null" [class]="config.class">{{errorMessage}}</span>'
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [config_1.ValidationMessagesConfiguration])
], ValidationMessageComponent);
exports.ValidationMessageComponent = ValidationMessageComponent;
//# sourceMappingURL=messages.component.js.map