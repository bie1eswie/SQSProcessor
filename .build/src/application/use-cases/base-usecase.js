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
import { performance } from "node:perf_hooks";
import { Logger } from "../../domain/logging/logger";
import { inject, injectable } from "inversify";
let BaseUseCase = class BaseUseCase {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    async execute(request) {
        try {
            const startTime = performance.now();
            request.validate();
            const response = await this.performOperation(request);
            const endTime = performance.now();
            const useCaseExecutionTime = endTime - startTime;
            this.logger.info(`${this.constructor.name}.execute(${request}) took +${useCaseExecutionTime} ms to execute!`);
            return response;
        }
        catch (error) {
            this.logger.error(`[@UseCase] ${this.constructor.name}.execute(${request}) threw the following error! --- ${error}`);
            throw error;
        }
    }
};
BaseUseCase = __decorate([
    injectable(),
    __param(0, inject(Logger)),
    __metadata("design:paramtypes", [Logger])
], BaseUseCase);
export { BaseUseCase };
//# sourceMappingURL=base-usecase.js.map