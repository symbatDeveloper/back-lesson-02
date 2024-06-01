import {Request, Response} from 'express'
import {blogsRepository} from '../blogsRepository'

export const delBlogController = (req: Request<{id: string}>, res: Response) => {
     const BlogId = blogsRepository.del(req.params.id)

//authoziation ??
    res
        .status(204)


}