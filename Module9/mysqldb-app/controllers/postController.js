const { Post, User } = require("../models");

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, description, image, userId } = req.body;
        const post = await Post.create({ title, description, image, userId });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: "Failed to create post", details: err.message });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                as: "author",
                attributes: ["id", "username", "email"]
            }
        });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch posts", details: err.message });
    }
};

// Get post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: {
                model: User,
                as: "author",
                attributes: ["id", "username", "email"]
            }
        });
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch post", details: err.message });
    }
};

// Get all posts by a user
exports.getPostsByUserId = async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { userId: req.params.userId }
        });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user's posts", details: err.message });
    }
};
