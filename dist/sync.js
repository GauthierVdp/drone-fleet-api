"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./core/config/database")); // Adjust path if necessary
database_1.default.sync({ force: false })
    .then(() => {
    console.log('Database & tables synced successfully.');
})
    .catch((err) => {
    console.error('Error syncing database:', err);
});
//# sourceMappingURL=sync.js.map