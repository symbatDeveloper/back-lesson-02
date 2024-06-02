import {Request, Response} from 'express'
import {PostViewModel} from '../../../input-output-types/posts-types'
import {postsRepository} from '../postsRepository'
import {blogsRepository} from "../../blogs/blogsRepository";

export const getPostsController = (req: Request, res: Response<PostViewModel[]>) => {
    const getpostAll = postsRepository.getAll()

    res
        .status(200)
        .json(getpostAll)
}