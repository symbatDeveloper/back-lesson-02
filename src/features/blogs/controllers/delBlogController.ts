import {Request, Response} from 'express'
import {blogsRepository} from '../blogsRepository'
import {OutputErrorsType} from "../../../input-output-types/output-errors-type";

export const delBlogController = (req: Request<{id: string}>, res: Response) => {
     const blogId = blogsRepository.del(req.params.id)

        res.status(204).json({})
return
}