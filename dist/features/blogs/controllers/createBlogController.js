"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogController = void 0;
const blogsRepository_1 = require("../blogsRepository");
const createBlogController = (req, res) => {
    const newBlogId = blogsRepository_1.blogsRepository.create(req.body);
    const newBlog = blogsRepository_1.blogsRepository.findAndMap(newBlogId);
    // const errors =blogValidators();
    //
    // if (errors.length > 0) {
    //     return res.status(400).json({ errorsMessages: errors });
    // }
    if (newBlog) {
        res
            .status(201)
            .json(newBlog);
    }
};
exports.createBlogController = createBlogController;
