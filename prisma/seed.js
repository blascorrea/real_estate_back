const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    console.log("Running seed...");

    await prisma.city.createMany({
        data: [
            { name: "Bogotá" },
            { name: "Medellín" },
            { name: "Cali" },
            { name: "Barranquilla" },
            { name: "Cartagena" },
            { name: "Santa Marta" },
        ],
    });

    await prisma.country.createMany({
        data: [
            { name: "Colombia" },
            { name: "Venezuela" },
            { name: "Ecuador" },
            { name: "Brazil" },
            { name: "Perú" },
            { name: "Chile" },
            { name: "Argentina" },
            { name: "Uruguay" },
            { name: "Paraguay" },
        ],
    });

    console.log("✅ Seed completed");
}

main()
    .catch((e) => {
        console.error("❌ Error seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });