import {Response, Request} from 'express'
import {BlogInputModel, BlogViewModel} from '../../../input-output-types/blogs-types'
import {blogsRepository} from '../blogsRepository'
import {FieldNamesType, OutputErrorsType} from "../../../input-output-types/output-errors-type";
import {inputCheckErrorsMiddleware} from "../../../global-middlewares/inputCheckErrorsMiddleware";
import {blogValidators} from "../middlewares/blogValidators";

export const createBlogController = (req: Request<any, any, BlogInputModel>, res: Response<BlogViewModel>) => {
    const newBlogId = blogsRepository.create(req.body)
    const newBlog = blogsRepository.findAndMap(newBlogId)
    // const errors =blogValidators();
    //
    // if (errors.length > 0) {
    //     return res.status(400).json({ errorsMessages: errors });
    // }
if (newBlog){
    res
        .status(201)
        .json(newBlog)
}
}