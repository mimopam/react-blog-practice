
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import CategoryArticle from './pages/CategoryArticle/CategoryArticle';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:type" element={<CategoryArticle />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;