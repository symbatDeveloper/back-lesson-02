"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidators = exports.findBlogValidator = exports.websiteUrlValidator = exports.descriptionValidator = exports.nameValidator = void 0;
const express_validator_1 = require("express-validator");
const inputCheckErrorsMiddleware_1 = require("../../../global-middlewares/inputCheckErrorsMiddleware");
const blogsRepository_1 = require("../blogsRepository");
const admin_middleware_1 = require("../../../global-middlewares/admin-middleware");
// name: string // max 15
// description: string // max 500
// websiteUrl: string // max 100 ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
exports.nameValidator = (0, express_validator_1.body)('name').isString().withMessage('not string')
    .trim().isLength({ min: 1, max: 15 }).withMessage('more then 15');
exports.descriptionValidator = (0, express_validator_1.body)('description').isString().withMessage('not string')
    .trim().isLength({ min: 1, max: 500 }).withMessage('more then 500 or 0');
exports.websiteUrlValidator = (0, express_validator_1.body)('websiteUrl').isString().withMessage('not string');
const findBlogValidator = (req, res, next) => {
    const blog = blogsRepository_1.blogsRepository.find(req.params.id);
    if (!blog) {
        res
            .status(404)
            .json({});
        return;
    }
    next();
};
exports.findBlogValidator = findBlogValidator;
exports.blogValidators = [
    admin_middleware_1.adminMiddleware,
    exports.nameValidator,
    exports.descriptionValidator,
    exports.websiteUrlValidator,
    inputCheckErrorsMiddleware_1.inputCheckErrorsMiddleware,
];
