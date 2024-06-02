"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsController = void 0;
const postsRepository_1 = require("../postsRepository");
const getPostsController = (req, res) => {
    const getpostAll = postsRepository_1.postsRepository.getAll();
    res
        .status(200)
        .json(getpostAll);
};
exports.getPostsController = getPostsController;
