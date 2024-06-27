import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
        <div>
        <h2>Sorry</h2>
        <p>Page not found</p>
        <Link to="/">Go to Homepage</Link>     
        </div>
           
    </div>
  )
}

export default NotFound