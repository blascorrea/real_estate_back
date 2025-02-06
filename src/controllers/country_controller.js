const prisma = require("../models");

const getCountries = async (req, res) => {
    try {
        const countries = await prisma.country.findMany();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener países" });
    }
}

module.exports = {
    getCountries,
}