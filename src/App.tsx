import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/create" Component={Create} />
            <Route path="/blogs/:id" Component={BlogDetails} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
