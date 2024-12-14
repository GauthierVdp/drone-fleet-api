import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connectToDatabase = async () => {
  try {
    await prisma.$connect();  // Verbindt met de database
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);  // Stop de server bij fout
  }
};

const closeDatabaseConnection = async () => {
  try {
    await prisma.$disconnect();  // Sluit de databaseverbinding af
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error disconnecting from the database:", error);
  }
};

export { prisma, connectToDatabase, closeDatabaseConnection };
