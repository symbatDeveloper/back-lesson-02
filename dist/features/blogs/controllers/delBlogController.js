"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delBlogController = void 0;
const blogsRepository_1 = require("../blogsRepository");
const delBlogController = (req, res) => {
    const BlogId = blogsRepository_1.blogsRepository.del(req.params.id);
    //authoziation ??
    res
        .status(204);
};
exports.delBlogController = delBlogController;
