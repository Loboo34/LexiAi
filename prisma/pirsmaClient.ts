import { PrismaClient } from "@prisma/client/extension";

const globalPrisma = global as unknown as { prisma?: PrismaClient };

const prisma = globalPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  globalPrisma.prisma = prisma;
}   

export default prisma;