class DomainException extends Error {
    code;
    message;
    status;
    constructor(status, code, message) {
        super(message);
        this.name = new.target.name;
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
export { DomainException };
//# sourceMappingURL=domain.exception.js.map