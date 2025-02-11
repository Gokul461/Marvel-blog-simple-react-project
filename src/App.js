import './components/blog.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/footer';
import Home from './components/home';
import Learn from './components/learn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/learn" element={<Learn />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
