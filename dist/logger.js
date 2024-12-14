"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
// Configuratie van de logger
const logger = winston_1.default.createLogger({
    level: 'info', // De minimum logniveau (info betekent dat info en hogere niveaus worden gelogd)
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), // Voeg tijdstempels toe aan de logs
    winston_1.default.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`; // Log bericht formaat
    })),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), // Kleuren voor logniveaus
            winston_1.default.format.simple())
        }),
        new winston_1.default.transports.File({
            filename: 'logs/app.log',
            level: 'info', // Alleen loggen van info en hoger naar bestand
        }),
    ],
});
exports.default = logger;
