import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Homepage</h2>
      <p>Explore our products!</p>
      <Link to="/products">Go to Product Page</Link>
    </div>
  );
};

export default Home;
