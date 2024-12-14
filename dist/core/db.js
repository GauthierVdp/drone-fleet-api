"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabaseConnection = exports.connectToDatabase = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$connect(); // Verbindt met de database
        console.log("Database connected");
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Stop de server bij fout
    }
});
exports.connectToDatabase = connectToDatabase;
const closeDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$disconnect(); // Sluit de databaseverbinding af
        console.log("Database connection closed");
    }
    catch (error) {
        console.error("Error disconnecting from the database:", error);
    }
});
exports.closeDatabaseConnection = closeDatabaseConnection;
