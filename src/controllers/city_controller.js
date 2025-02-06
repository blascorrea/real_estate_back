const prisma = require("../models");

const getCities = async (req, res) => {
    try {
        const cities = await prisma.city.findMany();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ciudades" });
    }
}

module.exports = {
    getCities,
}