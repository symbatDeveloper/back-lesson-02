import {Request, Response} from 'express'
import {PostViewModel} from '../../../input-output-types/posts-types'
import {postsRepository} from '../postsRepository'
import {blogsRepository} from "../../blogs/blogsRepository";

export const findPostController = (req: Request<{id: string}>, res: Response<PostViewModel | {}>) => {
    const getPost = postsRepository.findAndMap(req.params.id)

    res
        .status(200)
        .json(getPost)
}