import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <Link to={"/"}>home</Link> <br />
      <Link to={"/add"}>add</Link>
    </nav>
  );
}
