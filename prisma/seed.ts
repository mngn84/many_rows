import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.$executeRaw`
        INSERT INTO "User" ("firstname", "lastname", "age", "gender", "hasProblems")
        SELECT 
            'Firstname' || i,
            'Lastname' || i,
            18 + floor(random() * 65) :: integer,
            CASE WHEN random() < 0.5 THEN 'Male' ELSE 'Female' END,
            random() < 0.5
        FROM generate_series(1, 1000000) AS i
    `;
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })