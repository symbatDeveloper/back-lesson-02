import {Request, Response} from 'express'
import {BlogViewModel} from '../../../input-output-types/blogs-types'
import {blogsRepository} from '../blogsRepository'

export const getBlogsController = (req: Request, res: Response<BlogViewModel[]>) => {
    const getBlogAll = blogsRepository.getAll()

    res
        .status(200)
        .json(getBlogAll)
}