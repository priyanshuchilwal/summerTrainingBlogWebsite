import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: true }).then(
      (response) => {
        response.json().then((userInfo) => {
          setUsername(userInfo.username);
        });
      }
    );
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <Navigation username={username} logout={logout} />
    </header>
  );
}
