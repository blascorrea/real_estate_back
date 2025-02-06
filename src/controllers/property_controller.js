const prisma = require("../models");

const getProperties = async (req, res) => {
    const { search, country, city, propertyType, fromSurface, toSurface } = req.query;
    let filter = {};
    if (country) {
        filter.countryId = parseInt(country);
    }
    if (city) {
        filter.cityId = parseInt(city);
    }
    if (propertyType) {
        filter.propertyType = propertyType;
    }
    if (fromSurface && toSurface) {
        filter.surface = {
            gte: parseFloat(fromSurface),
            lte: parseFloat(toSurface)
        }
    } else if (fromSurface) {
        filter.surface = {
            gte: parseFloat(fromSurface)
        }
    } else if (toSurface) {
        filter.surface = {
            lte: parseFloat(toSurface)
        }
    }
    try {
        const properties = await prisma.property.findMany({
            where: filter,
            include: {
                city: true,
                country: true,
            }
        });
        if (search) {
            const result = properties.filter(
                (property) => property.name.toLowerCase().includes(search.toLowerCase())
                    || property.country.name.toLowerCase().includes(search.toLowerCase()));
            return res.json(result);
        }

        return res.json(properties);
    } catch (error) {
        return res.status(500).json({ error: "Error al obtener propiedades" });
    }
}

const createProperty = async (req, res) => {
    try {
        const {
            name,
            address,
            propertyType,
            surface,
            zipCode,
            countryId,
            cityId,
        } = req.body;
        const newProperty = await prisma.property.create({
            data: {
                name,
                address,
                propertyType,
                surface,
                zipCode: zipCode || '',
                country: { connect: { id: countryId } },
                city: { connect: { id: cityId } },
            }
        });
        return res.status(201).json(newProperty);
    } catch (error) {
        return res.status(500).json({ error: "Error al crear propiedad" });
    }
}

const updateProperty = async (req, res) => {
    try {
        const {
            name,
            address,
            propertyType,
            surface,
            zipCode,
            countryId,
            cityId,
        } = req.body;
        const updatedProperty = await prisma.property.update({
            where: { id: parseInt(req.params.id) },
            data: {
                name,
                address,
                propertyType,
                surface,
                zipCode: zipCode || '',
                country: { connect: { id: countryId } },
                city: { connect: { id: cityId } },
            }
        });
        return res.json(updatedProperty);
    } catch (error) {
        return res.status(500).json({ error: "Error al actualizar propiedad" });
    }
}

const deleteProperty = async (req, res) => {
    try {
        await prisma.property.delete({
            where: { id: parseInt(req.params.id) },
        });
        return res.json({ id: req.params.id });
    } catch (error) {
        return res.status(500).json({ error: "Error al actualizar propiedad" });
    }
}

module.exports = {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
}