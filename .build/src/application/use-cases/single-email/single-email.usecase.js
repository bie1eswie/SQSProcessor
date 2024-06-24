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
import { Logger } from "../../../domain/logging/logger";
import { AbstractSendGridService } from "../../interface/send-grid";
import { BaseUseCase } from "../base-usecase";
import container from "../../configuration/inversify.config";
import { inject, injectable } from "inversify";
let SingleEmailUseCase = class SingleEmailUseCase extends BaseUseCase {
    sendGridService;
    constructor(sendGridService) {
        const logger = container.get(Logger);
        super(logger);
        this.sendGridService = sendGridService;
    }
    performOperation(request) {
        const email = {
            to: request.destination,
            text: request.text,
            html: request.html,
            subject: request.subject,
            from: request.from,
        };
        return this.sendGridService.SendSingleEmail(email);
    }
};
SingleEmailUseCase = __decorate([
    injectable(),
    __param(0, inject("SendGridService")),
    __metadata("design:paramtypes", [AbstractSendGridService])
], SingleEmailUseCase);
export { SingleEmailUseCase };
//# sourceMappingURL=single-email.usecase.js.map