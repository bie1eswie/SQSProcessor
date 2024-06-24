export class EndpointsMock {
    constructor() { }
    messageData = {
        updateMessageRequest: () => {
            return `${process.env.MESSAGE_DATA_API}/api/`;
        },
    };
}
//# sourceMappingURL=endpoints.mock.js.map