import "reflect-metadata";
import { Container } from "inversify";
import { SendGridService } from "../../infrastructure/services/send-grid.service";
import { SingleEmailUseCase } from "../use-cases/single-email/single-email.usecase";
import { Logger } from "../../domain/logging/logger";
import { Endpoints } from "./endpoints/endpoints";
const container = new Container();
container.bind(Logger).toSelf();
container.bind("SendGridService").to(SendGridService);
container.bind("SingleEmailUseCase").to(SingleEmailUseCase);
container.bind("Endpoints").to(Endpoints);
export default container;
//# sourceMappingURL=inversify.config.js.map