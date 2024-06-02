import {Router} from 'express'
import {createPostController} from './controllers/createPostController'
import {getPostsController} from './controllers/getPostsController'
import {findPostController} from './controllers/findPostController'
import {delPostController} from './controllers/delPostController'
import {putPostController} from './controllers/putPostController'
import {blogIdValidator, findPostValidator, postValidators} from './middlewares/postValidators'
import {adminMiddleware} from '../../global-middlewares/admin-middleware'
import {blogValidators, findBlogValidator} from "../blogs/middlewares/blogValidators";
import {createBlogController} from "../blogs/controllers/createBlogController";
import {getBlogsController} from "../blogs/controllers/getBlogsController";
import {findBlogController} from "../blogs/controllers/findBlogController";
import {delBlogController} from "../blogs/controllers/delBlogController";
import {putBlogController} from "../blogs/controllers/putBlogController";
import {blogsRouter} from "../blogs";
import {inputCheckErrorsMiddleware} from "../../global-middlewares/inputCheckErrorsMiddleware";

export const postsRouter = Router()

postsRouter.post('/', ...postValidators, createPostController)
postsRouter.get('/', getPostsController)
postsRouter.get('/:id',  findPostValidator,blogIdValidator, findPostController)
postsRouter.delete('/:id',   adminMiddleware,findPostValidator,blogIdValidator,delPostController)
postsRouter.put('/:id',   findPostValidator,...postValidators, putPostController)
//adminMiddleware,findPostValidator,inputCheckErrorsMiddleware,

// blogsRouter.post('/', ...blogValidators, createBlogController)
// blogsRouter.get('/', getBlogsController)
// blogsRouter.get('/:id', findBlogValidator, findBlogController)
// blogsRouter.delete('/:id', adminMiddleware, findBlogValidator, delBlogController)
// blogsRouter.put('/:id', findBlogValidator, ...blogValidators, putBlogController)
//
// не забудьте добавить роут в апп