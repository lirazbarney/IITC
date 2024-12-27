import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}>home</Link>
      <span> | </span>
      <Link to={"/about"}>about me</Link>
    </nav>
  );
}
