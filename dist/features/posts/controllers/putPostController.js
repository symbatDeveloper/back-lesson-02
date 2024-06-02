"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPostController = void 0;
const postsRepository_1 = require("../postsRepository");
const putPostController = (req, res) => {
    const updateBlog = postsRepository_1.postsRepository.put(req.body, req.params.id);
    return res.status(204).json({});
};
exports.putPostController = putPostController;
