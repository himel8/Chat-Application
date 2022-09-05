import React from "react";
import Chat from "../Components/Home/Chat";
import Sidebar from "../Components/Home/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
