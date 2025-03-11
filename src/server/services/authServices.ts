import bcrypt from "bcryptjs";
import prisma from "../../../prisma/pirsmaClient";


export async function registerUser(name: string, email: string, password: string) {
    const userExists = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (userExists) {
        throw new Error("User already exists")}
        const hashedPassword = await bcrypt.hash(password, 10);
        
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return user;
}

export async function loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where : {
            email,
        }
    })
    if (!user) {
        throw new Error("Invalid login")
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new Error("Invalid login")
    }
    return user
}
