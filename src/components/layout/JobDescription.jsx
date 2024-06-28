import React from "react";
import "./JobDescription.scss";
import Logo from "../../assets/img/atlassian.png";
import Figma from "../../assets/img/image_1.png";
import AdobeXD from "../../assets/img/image_2.png";
import Adobe from "../../assets/img/image_3.png";
import Coin from "../../assets/svg/coins-stacked.svg";
import Location from "../../assets/svg/marker-pin.svg";
import { listItems } from "../../utils/listItems";

const JobDescription = () => {
  return (
    <section>
      <div className="job_title">
        <div className="grp_1">
          <h1>Senior Product Design</h1>
          <div className="para">
            <span className="ellipse_1"></span>
            <span>posted 2 days ago</span>
            <div className="open">
              <span className="ellipse_2"></span>
              <span>Open</span>
            </div>
          </div>
        </div>
        <div className="grp_2">
          <span>
            <img src={Location} alt="Location" />
            Delaware, USA
          </span>
          <span className="ellipse_1"></span>
          <span>
            <img src={Coin} alt="Coin" />
            $300k-$400k
          </span>
        </div>
      </div>
      <div className="job_details">
        <div>
          <span>Skills Required</span>
          <div className="list">
            <ListImage img={Figma} title="Figma" />
            <ListImage img={Adobe} title="Adobe Illustrator" />
            <ListImage img={AdobeXD} title="Adobe XD" />
          </div>
        </div>
        <ListImage title={"Preferred Language"} value={"English"} />
        <ListImage title={"Type"} value={"Full Time"} />
        <ListImage
          title={"Years of Experience"}
          value={"3+ Years of Experience"}
        />
      </div>
      <div className="job_description">
        <span className="title">About the job</span>
        <div className="details">
          <div className="points">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
          <span>Benefits:</span>
          <div className="benefits">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </div>
          <span>Schedule:</span>
          <div className="schedule">
            <li>Day Shift</li>
          </div>
          <span>Supplemental pay types:</span>
          <div className="pay_types">
            <li>Performance Bonus</li>
            <li>Yearly Bonus</li>
          </div>
          <span>Work Location: In person</span>
        </div>
      </div>
      <div className="company_details">
        <span className="title">
          <img src={Logo} alt="Logo" />
          Atlassian
        </span>
        <div className="details">
          <div className="grp_1">
            <DetailsCard title="Company size" details="1k - 2k Employees" />
            <DetailsCard
              title="Sector"
              details="Information Technology, Infrastructure"
            />
            <DetailsCard title="Founded In" details="2019" />
          </div>
          <div className="grp_2">
            <DetailsCard title="Type" details={"Private"} />
            <DetailsCard title="Funding" details={"Bootstrapped"} />
            <DetailsCard
              title="Founded By"
              details={"Scott Farquhar, Mike Cannon-Brookes"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ListImage({ img, title, value }) {
  return img ? (
    <li>
      <img src={img} alt={title} />
      {title}
    </li>
  ) : (
    <div>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}

function DetailsCard({ title, details }) {
  return (
    <div className="card">
      <span>{title}</span>
      <span>{details}</span>
    </div>
  );
}

export default JobDescription;
