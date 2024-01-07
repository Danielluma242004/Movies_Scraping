import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { MoviesBrowser } from "./pages/MoviesBrowser";
import { MoviesGenre } from "./pages/MoviesGenre";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MoviesBrowser />} />
        <Route path="/genre" element={<MoviesGenre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
