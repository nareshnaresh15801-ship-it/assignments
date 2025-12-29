
import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams(); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default User;