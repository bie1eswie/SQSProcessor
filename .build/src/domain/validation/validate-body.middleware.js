import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../../domain/exceptions/validation-exception";
export * from "class-validator";
export const validationPipe = async (schema, requestObject) => {
    const transformedClass = plainToInstance(schema, requestObject);
    const errors = await validate(transformedClass);
    if (errors.length > 0) {
        const errorMessages = errors
            .map((error) => Object.values(error.constraints))
            .flat();
        throw new ValidationException(errorMessages.join(", "));
    }
    return true;
};
//# sourceMappingURL=validate-body.middleware.js.map