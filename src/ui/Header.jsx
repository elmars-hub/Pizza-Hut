import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Hut</Link>

      <SearchOrder />

      <p>Name</p>
    </header>
  );
}

export default Header;
