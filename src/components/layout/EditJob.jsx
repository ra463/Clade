import React from "react";
import "./EditJob.scss";
import Trash from "../../assets/svg/trash.svg";
import Edit from "../../assets/svg/edit.svg";
import Check from "../../assets/svg/user-check.svg";
import Users from "../../assets/svg/users.svg";
import Message from "../../assets/svg/message.svg";
import Eye from "../../assets/svg/eye.svg";

const EditJob = () => {
  return (
    <div className="edit_job">
      <div className="btns">
        <button>
          <img src={Trash} alt="Trash" />
          Delete Job
        </button>
        <button>
          <img src={Edit} alt="Edit" />
          Edit Job
        </button>
      </div>
      <div className="details">
        <DetailsCard svg={Users} title="Applicants" details="400" />
        <DetailsCard svg={Check} title="Matches" details="100" />
        <DetailsCard svg={Message} title="Messages" details="147" />
        <DetailsCard svg={Eye} title="Views" details="800" />
      </div>
    </div>
  );
};

function DetailsCard({ svg, title, details }) {
  return (
    <div className="card">
      <span>
        <img src={svg} alt={title} />
        {title}
      </span>
      <span>{details}</span>
    </div>
  );
}

export default EditJob;
