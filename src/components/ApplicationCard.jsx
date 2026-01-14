import React from "react";
import { useNavigate } from "react-router-dom";
import demo_company_logo from "../assets/mock_company_logo.png";
import { cleanJobTitle } from "../utilities/cleanJobTitle";

import style from "../styles/productCard.module.css";

import { deleteApplication } from "../redux/slice/state/applicationSlice";
import { useDispatch } from "react-redux";

const ApplicationCard = ({ application }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  function handleViewDetails(e) {
    navigate(`/applications/${application.jobId}`);
  }

  function handleDelete(e) {
    dispatch(deleteApplication(application.jobId));
  }
  return (
    <article className={style.outer_container}>
      <div className={style.company_tag}>
        <img src={demo_company_logo} alt="Company logo" />
        <h3>{ cleanJobTitle(application.job.companyName)}</h3>
      </div>
      <div className={style.job_title}>
        <h2>{cleanJobTitle(application.job.jobTitle)}</h2>
        <div>
          <button style={{ marginRight: "10px" }} onClick={handleViewDetails}>
            View Details
          </button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
      <p className={style.para}>
        {application.job.jobExcerpt
          ? cleanJobTitle(application.job.jobExcerpt)
          : "--------------------"}
      </p>
      <div className={style.imp_points}>
        <div>
          <p>Applicant Name</p>
          <h4>{application?.info?.applicantName || "---"}</h4>
        </div>
        <div>
          <p>Last Modified</p>
          <h4>{application.last_modified || "---"}</h4>
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default ApplicationCard;
