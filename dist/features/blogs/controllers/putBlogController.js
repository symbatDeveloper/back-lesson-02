"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBlogController = void 0;
const blogsRepository_1 = require("../blogsRepository");
const putBlogController = (req, res) => {
    const updateBlog = blogsRepository_1.blogsRepository.put(req.body, req.params.id);
    //authoriz?
    res
        .status(204)
        .json(updateBlog);
};
exports.putBlogController = putBlogController;
