"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = void 0;
const db_1 = require("../../db/db");
exports.blogsRepository = {
    create(blog) {
        const newBlog = {
            id: new Date().toISOString() + Math.random(),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
        };
        db_1.db.blogs = [...db_1.db.blogs, newBlog];
        return newBlog.id;
    },
    find(id) {
        return db_1.db.blogs.find(b => b.id === id);
    },
    findAndMap(id) {
        const blog = this.find(id); // ! используем этот метод если проверили существование
        return this.map(blog);
    },
    getAll() {
        return db_1.db.blogs.map(p => this.map(p));
    },
    del(id) {
        let fiteredDb = db_1.db.blogs.filter(b => b.id !== id);
        db_1.db.blogs = fiteredDb;
        console.log(fiteredDb);
    },
    put(blog, id) {
        // const updateBlog= db.blogs.find(b => b.id === id)
        //      if (updateBlog){
        //          updateBlog.name=blog.name;
        //          updateBlog.description=blog.description;
        //          updateBlog.websiteUrl=blog.websiteUrl;
        //      }
        //      return updateBlog;
        //      const blog = blogsRepository.find(id)!
        db_1.db.blogs = db_1.db.blogs.map(p => p.id === id ? Object.assign(Object.assign(Object.assign({}, p), blog), { blogName: blog.name }) : p);
    },
    map(blog) {
        const blogForOutput = {
            id: blog.id,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
            name: blog.name,
        };
        return blogForOutput;
    },
};
