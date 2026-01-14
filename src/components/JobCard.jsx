import React from "react";
import { useNavigate } from "react-router-dom";
import demo_company_logo from "../assets/mock_company_logo.png";
import { cleanJobTitle } from "../utilities/cleanJobTitle";
import { formatDate } from "../utilities/formatDate";
import style from "../styles/productCard.module.css";

const JobCard = ({ job }) => {
  let navigate = useNavigate();
  function handleViewDetails(e) {
    navigate(`/job/${job.id}`);
  }
  return (
    <article className={style.outer_container}>
      <div className={style.company_tag}>
        <img src={demo_company_logo} alt="Company logo" />
        <h3>{cleanJobTitle(job.companyName)}</h3>
      </div>
      <div className={style.job_title}>
        <h2>{cleanJobTitle(job.jobTitle)}</h2>
        <button onClick={handleViewDetails}>View Details</button>
      </div>
      <p className={style.para}>
        {job.jobExcerpt
          ? cleanJobTitle(job.jobExcerpt)
          : "--------------------"}
      </p>
      <div className={style.imp_points}>
        <div className="inner_container">
          <div>
            <p>Remote from</p>
            <h4>{job.jobGeo || "---"}</h4>
          </div>
          <div>
            <p>Department</p>
            <h4>{(job.jobIndustry && cleanJobTitle(job.jobIndustry[0])) || "---"}</h4>
          </div>
        </div>
        <div className="inner_container">
          <div>
            <p>Employment type</p>
            <h4>{(job.jobType && job.jobType[0]) || "---"}</h4>
          </div>
          <div>
            <p>Experience level</p>
            <h4>{job.jobLevel || "---"}</h4>
          </div>
        </div>
        <div className="inner_container">
          <div>
            <p>
              Salary {job.salaryPeriod || "---"} {job.salaryCurrency || "---"}
            </p>
            <h4>
              {job.salaryMin || "---"} - {job.salaryMax || "---"}{" "}
            </h4>
          </div>
          <div>
            <p>Job posted</p>
            <h4>{formatDate(job.pubDate) || "---"}</h4>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
