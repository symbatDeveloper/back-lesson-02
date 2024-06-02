import {Request, Response} from 'express'
import {PostInputModel} from '../../../input-output-types/posts-types'
import {postsRepository} from '../postsRepository'
import {blogsRepository} from "../../blogs/blogsRepository";

export const putPostController = (req: Request<{id: string}, any, PostInputModel>, res: Response) => {
    const updateBlog =postsRepository.put(req.body,req.params.id)

    return res.status(204).json({})

}