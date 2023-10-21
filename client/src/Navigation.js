import { Link } from "react-router-dom";
export default function Navigation({ username, logout }) {
  return (
    <nav>
      {username && (
        <>
          <Link to="/create"> Create new post </Link>
          <a href="/logout" onclick={logout}>
            Logout
          </a>
        </>
      )}
      {!username && (
        <>
          <Link to="/login" className="">
            Login
          </Link>
          <Link to="/register" className="">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}
