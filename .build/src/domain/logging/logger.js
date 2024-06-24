var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { injectable } from "inversify";
import { format, createLogger, transports } from "winston";
const { colorize, combine, label, printf, timestamp } = format;
let Logger = class Logger {
    logger = createLogger({
        level: "debug",
        format: combine(label({ label: "[LOGGER]" }), timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
        }), colorize({
            all: true,
            colors: {
                info: "bold blue", // fontStyle color
                warn: "italic yellow",
                error: "bold red",
                debug: "green",
            },
        }), printf(function (info) {
            return `\x1B[33m\x1B[3[${info.label}\x1B[23m\x1B[39m \x1B[32m${info.timestamp}\x1B[39m ${info.level} : ${info.message}`;
        })),
        transports: [new transports.Console()],
    });
    info(message, callback) {
        this.logger.info(message, callback);
    }
    warn(message, callback) {
        this.logger.warn(message, callback);
    }
    error(message, callback) {
        this.logger.error(message, callback);
    }
    debug(message, callback) {
        this.logger.debug(message, callback);
    }
};
Logger = __decorate([
    injectable()
], Logger);
export { Logger };
//# sourceMappingURL=logger.js.map