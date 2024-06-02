import {Request, Response} from 'express'
import {BlogViewModel} from '../../../input-output-types/blogs-types'
import {blogsRepository} from '../blogsRepository'
import {OutputErrorsType} from "../../../input-output-types/output-errors-type";

export const findBlogController = (req: Request<{id: string}>, res: Response<BlogViewModel | {}>) => {
    const getBlog = blogsRepository.findAndMap(req.params.id)

    res
        .status(200)
        .json(getBlog)
}