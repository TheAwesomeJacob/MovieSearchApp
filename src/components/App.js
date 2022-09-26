import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot  } from "react-dom/client";
import MovieDiscover from './MovieDiscover';
import MovieDetail from './MovieDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieDiscover />}/>
          <Route path="/movie-description/:id" element={<MovieDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );

}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);