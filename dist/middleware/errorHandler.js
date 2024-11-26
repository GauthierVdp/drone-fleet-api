"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map