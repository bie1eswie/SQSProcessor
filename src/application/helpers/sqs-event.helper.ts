import { SQSEvent } from "aws-lambda";
import { InvalidParameterException } from "../exceptions/invalid-parameter.exception";
import { SingleEmailRequest } from "../use-cases/single-email/single-email.request";
import container from "../configuration/inversify.config";
import { SingleEmailUseCase } from "../use-cases/single-email/single-email.usecase";

export class SQSEventHelper {
  private getRecordBody(event: SQSEvent) {
    if (!event) {
      throw new InvalidParameterException("Event cannot be null");
    }
    const record = event.Records[0];
    if (!record) {
      throw new InvalidParameterException(
        "There should be at least one record to process"
      );
    }
    const body = JSON.parse(record.body);
    return body;
  }

  private createSingleEmailRequest(event: SQSEvent): SingleEmailRequest {
    const body = this.getRecordBody(event);
    return new SingleEmailRequest(
      body.to,
      process.env.SENDGRID_FROM_EMAIL,
      body.subject,
      body.text,
      body.html
    );
  }

  SendSingleEmailRequest(event: SQSEvent) {
    const useCase = container.get<SingleEmailUseCase>("SingleEmailUseCase");
    const request = this.createSingleEmailRequest(event);
    return useCase.execute(request);
  }
}
