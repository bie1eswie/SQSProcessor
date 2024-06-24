import { SQSEventHelper } from "./application/helpers/sqs-event.helper";
export const handler = async (_event, _context) => {
    const sqsHelper = new SQSEventHelper();
    const res = await sqsHelper.SendSingleEmailRequest(_event);
    return {
        statusCode: 200,
        body: JSON.stringify(res),
    };
};
//# sourceMappingURL=emailHandler.js.map