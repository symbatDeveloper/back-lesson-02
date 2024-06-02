import {Request, Response} from 'express'
import {BlogInputModel} from '../../../input-output-types/blogs-types'
import {blogsRepository} from '../blogsRepository'

export const putBlogController = (req: Request<{id: string}, any, BlogInputModel>, res: Response) => {
    const updateBlog = blogsRepository.put(req.body,req.params.id)
//authoriz?
    res.status(204)
        .json(updateBlog)
}