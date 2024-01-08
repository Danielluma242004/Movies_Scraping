import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex p-4 m-4">
      <Link to="/" className="focus:font-bold">
        Movies Scrapping
      </Link>
      <div className="ml-10">
        <Link to="/genre" className="focus:font-bold">
          Search By Category
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
