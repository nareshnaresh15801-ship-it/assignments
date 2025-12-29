
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/123">User 123</Link>
    </nav>
  );
};

export default Navigation;