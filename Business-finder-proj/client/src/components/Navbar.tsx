import { useContext } from "react";
import { UserContext } from "../providers/user-context";

import { Link } from "react-router-dom";

export default function Navbar() {
  const user = useContext(UserContext);

  function userLogOut() {
    user?.logout();
    //remove cookie here
  }

  if (user?.user) {
    return (
      <>
        <div className="flex gap-2">
          <h1>hello {user.user.name}!</h1>
          <Link to="/">
            <button onClick={userLogOut}>log out</button>
          </Link>
          <Link to="/business/create">+</Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Link to="/login">login</Link> | <Link to="/signup">signup</Link>
    </>
  );
}
