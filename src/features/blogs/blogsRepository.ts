import {BlogDbType} from '../../db/blog-db-type'
import {db} from '../../db/db'
import {BlogInputModel, BlogViewModel} from '../../input-output-types/blogs-types'

export const blogsRepository = {
    create(blog: BlogInputModel) {
        const newBlog: BlogDbType = {
            id: new Date().toISOString() + Math.random(),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
        }
        db.blogs = [...db.blogs, newBlog]
        return newBlog.id
    },
    find(id: string) {
        return db.blogs.find(b => b.id === id)
    },
    findAndMap(id: string) {
        const blog = this.find(id)! // ! используем этот метод если проверили существование
        return this.map(blog)
    },
    getAll() {
        return db.blogs.map(p => this.map(p))
    },
    del(id: string) {

    let fiteredDb= db.blogs.filter(b => b.id !== id)
        db.blogs=fiteredDb
        console.log(fiteredDb);

    },
    put(blog: BlogInputModel, id: string) {
   // const updateBlog= db.blogs.find(b => b.id === id)
   //      if (updateBlog){
   //          updateBlog.name=blog.name;
   //          updateBlog.description=blog.description;
   //          updateBlog.websiteUrl=blog.websiteUrl;
   //      }
   //      return updateBlog;
   //      const blog = blogsRepository.find(id)!
        db.blogs = db.blogs.map(p => p.id === id ? {...p, ...blog, blogName: blog.name} : p)

    },
    map(blog: BlogDbType) {
        const blogForOutput: BlogViewModel = {
            id: blog.id,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            name: blog.name,
        }
        return blogForOutput
    },
}