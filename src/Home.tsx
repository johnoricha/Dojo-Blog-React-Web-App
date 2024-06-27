import BlogList, { BlogModel } from "./BlogList";
import useFetch from "./useFetch";
interface UseFetchResult { data: BlogModel[], isLoading: boolean, error: string }
const Home = () => {



  const { data: blogs, isLoading, error } = useFetch<UseFetchResult>("http://localhost:8000/blogs")

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <BlogList blogs={blogs} title="Mario's Blogs" />
    </div>
  );
}

export default Home;