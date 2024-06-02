import {Response, Request} from 'express'
import {PostInputModel, PostViewModel} from '../../../input-output-types/posts-types'
import {postsRepository} from '../postsRepository'
import {OutputErrorsType} from "../../../input-output-types/output-errors-type";

export const createPostController = (req: Request<any, any, PostInputModel>, res: Response<PostViewModel>) => {
    const newPostId = postsRepository.create(req.body)
    const newPost = postsRepository.findAndMap(newPostId)

    res
        .status(201)
        .json(newPost)
}