import React from "react";
import "./Home.scss";
import Header from "../components/layout/Header";
import JobTitle from "../components/layout/JobTitle";
import JobDescription from "../components/layout/JobDescription";
import EditJob from "../components/layout/EditJob";

const Home = () => {
  return (
    <>
      <Header />
      <JobTitle />
      <div className="grid">
        <JobDescription />
        <EditJob />
      </div>
    </>
  );
};

export default Home;
