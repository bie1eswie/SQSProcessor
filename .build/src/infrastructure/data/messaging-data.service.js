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
import { inject } from "inversify";
import { AbstractMessagingService } from "../../application/interface/messaging-service.abstract";
import axios from "axios";
import { AbstractEndpoints } from "../../application/configuration/endpoints/endpoints.abstract";
let MessagingDataService = class MessagingDataService extends AbstractMessagingService {
    endPoints;
    constructor(endPoints) {
        super();
        this.endPoints = endPoints;
    }
    SendMessageTrackingData(messageData) {
        return axios.post(this.endPoints.messageData.updateMessageRequest(), messageData);
    }
};
MessagingDataService = __decorate([
    __param(0, inject("Endpoints")),
    __metadata("design:paramtypes", [AbstractEndpoints])
], MessagingDataService);
export { MessagingDataService };
//# sourceMappingURL=messaging-data.service.js.map