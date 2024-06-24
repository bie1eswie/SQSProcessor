var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { validationPipe } from "../../../domain/validation/validate-body.middleware";
import { UseCaseRequest } from "../usecase.request";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class SingleEmailRequest extends UseCaseRequest {
    destination;
    from;
    subject;
    text;
    html;
    async validatePayload() {
        await validationPipe(SingleEmailRequest, this);
    }
    constructor(_to, _from, _subject, _text, _html) {
        super();
        this.from = _from;
        this.html = _html;
        this.subject = _subject;
        this.text = _text;
        this.destination = _to;
    }
}
__decorate([
    IsString(),
    IsNotEmpty(),
    IsEmail(),
    __metadata("design:type", String)
], SingleEmailRequest.prototype, "destination", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], SingleEmailRequest.prototype, "from", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], SingleEmailRequest.prototype, "subject", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], SingleEmailRequest.prototype, "text", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], SingleEmailRequest.prototype, "html", void 0);
//# sourceMappingURL=single-email.request.js.map