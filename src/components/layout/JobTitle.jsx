import React from "react";
import "./JobTitle.scss";

const JobTitle = () => {
  return (
    <div className="ribbon">
      <div className="tabs">
        <li className="active">Job Preview</li>
        <li>Applicants</li>
        <li>Match</li>
        <li>Messages</li>
      </div>
    </div>
  );
};

export default JobTitle;
