import { Link } from "react-router-dom";
import { MoviesBrowser } from "../pages/MoviesBrowser";
import { MoviesGenre } from "../pages/MoviesGenre";

function Navigation() {
  return (
    <div className="flex p-4 m-4">
      <Link to="/" className="font-bold">
        Movies Scrapping
      </Link>
      <div className="ml-10">
        <Link to="/genre">Search By Category</Link>
      </div>
    </div>
  );
}

export default Navigation;
