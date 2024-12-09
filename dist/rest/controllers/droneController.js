"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDrone = exports.getAllDrones = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllDrones = async (req, res) => {
    try {
        const drones = await prisma.drones.findMany();
        res.status(200).json(drones);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching drones', error: error.message });
    }
};
exports.getAllDrones = getAllDrones;
const createDrone = async (req, res) => {
    try {
        const drone = await prisma.drones.create({ data: req.body });
        res.status(201).json(drone);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating drone', error: error.message });
    }
};
exports.createDrone = createDrone;
//# sourceMappingURL=droneController.js.map