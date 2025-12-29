
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/user/42"); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={goToUser}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Go to User 42
      </button>
    </div>
  );
};

export default Home;