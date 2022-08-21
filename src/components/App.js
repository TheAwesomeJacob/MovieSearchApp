import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot  } from "react-dom/client";
import HomePage from './HomePage';
import MovieDetail from './MovieDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movie-description" element={<MovieDetail />}/>
      </Routes>
    </BrowserRouter>
  );

}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);