import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Contains links to login, signup, or if user is loggedin, this page
      contains link to Dashboard <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/signup">Signup</Link> <br />
      <Link to="/dashboard">Dashboard</Link> <br />
    </div>
  );
};

export default Home;
