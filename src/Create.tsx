import { FormEvent, useState } from "react";
import { BlogModel } from "./BlogList";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const blog: BlogModel = {title: title, body: body, author: author}
        
        
        setIsLoading(true)
        
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then((data) => {

            setIsLoading(false)
            navigate("/")

        })

    }


    return (<div className="create">
        <h2>Add A New Blog</h2>
        <form 
        onSubmit={(e) => {handleSubmit(e)}}
        >
            <label>Title:</label>
            <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </input>

            <label>Body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>Select Author:</label>
            <select
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>

            { !isLoading && <button>Add Blog</button>}
            {isLoading && <button disabled>Adding Blog...</button>}

        </form>
    </div>);
}

export default Create;