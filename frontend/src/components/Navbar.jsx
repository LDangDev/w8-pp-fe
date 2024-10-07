import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
// import { useContext } from "react";
// import ThemeContext from "../contexts/ThemeContext";
// import AuthContext from "../contexts/AuthContext";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const { isAuthenticated, clearUser, email, isLoading } = useAuth(); // Access Auth

  // const isAuthenticated = false;

  // const handleToggleTheme = () => {
  //   //
  // };
  const handleClick = (e) => {
    clearUser();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Jobs</h1>
      </Link>
      <div className="links">
        {isAuthenticated && (
          <div>
            <Link to="/jobs/add-job">Add Job</Link>
            {email && <span>{email}</span>}
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!isAuthenticated && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
      <button onClick={toggleTheme}>Toggle</button>
    </nav>
  );
};

export default Navbar;
