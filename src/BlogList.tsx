import { Link } from "react-router-dom"

export interface BlogModel {
    title: string
    body: string
    author: string
    id?: number
}
interface BlogListProps {
    blogs: BlogModel[]
    title?: string
    handleDelete?: (id: number) => void
}

const BlogList = ({ blogs, title, handleDelete }: BlogListProps) => {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h3>
                        {blog.title}
                    </h3>
                    </Link>
                    
                    <p>Written by {blog.author}</p>
                </div>))}
        </div>
    );
}

export default BlogList;
