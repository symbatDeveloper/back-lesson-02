"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostController = void 0;
const postsRepository_1 = require("../postsRepository");
const createPostController = (req, res) => {
    const newPostId = postsRepository_1.postsRepository.create(req.body);
    const newPost = postsRepository_1.postsRepository.findAndMap(newPostId);
    res
        .status(201)
        .json(newPost);
};
exports.createPostController = createPostController;
