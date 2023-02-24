import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailPage from './pages/BeerDetailPage';
import HomePage from './pages/HomePage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeersPage />} />
      <Route path="/random-beer" element={<RandomBeerPage />} />
      <Route path="/new-beer" element={<NewBeerPage />} />
      <Route path="/beers/:id" element={<BeerDetailPage />} />
    </Routes>
    

    </div>
  );
}

export default App;
