import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { BlogModel } from "./BlogList";

interface BlogDetailsResult {
    data: BlogModel;
    isLoading: boolean;
    error: string;
}

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isLoading, error  } = useFetch<BlogDetailsResult>(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {method: "DELETE"})
        .then(() => {
            navigate(-1)
        })
    }


    return (<div className="blog-details">
        {error && <p>{error}</p>}
        {isLoading && <p>Loading details...</p>}
        {blog && <article>
            <h2>
            {blog.title}
            </h2>
            <p>Written by {blog.author}</p>
            <div>
                {blog.body}
            </div>
            </article>}

            <button 
            onClick={handleDelete}
            >delete</button>

    </div>);
}

export default BlogDetails;