const axios = require("axios");

const BASE_URL = "https://fakestoreapi.com";

const getAllProducts = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

const getProductById = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(404).json({ error: "Product not found" });
    }
};

module.exports = {
    getAllProducts,
    getProductById
};
