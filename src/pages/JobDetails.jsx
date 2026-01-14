import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { renderJobDescription } from "../utilities/renderJobDescription";
import "../styles/JobDetailsStyle.css";
import { useSelector } from "react-redux";
import style from "../styles/productCard.module.css";
import { useGetJobDataQuery } from "../redux/slice/api/jobApiSlice";
import demo_company_logo from "../assets/mock_company_logo.png";
import { cleanJobTitle } from "../utilities/cleanJobTitle";
import { formatDate } from "../utilities/formatDate";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applications = useSelector((state) => state.application.applications);
  const { data } = useGetJobDataQuery();
  let job_Applied = applications.find(
    (application) => application.jobId === Number(id)
  );

  let job = job_Applied?.job;
  if (!job) {
    job = data?.jobs?.find((job) => job.id === Number(id));
  }
  

  function handleApply(e) {
    navigate(`/apply/${id}`);
  }
   
  
  return (
    <div className={style.outer_outer_container}>
      <section className={style.inner_container}>
        {!job ? (
          <h1>Loading...</h1>
        ) : (
          <article className={style.outer_container}>
            <div className={style.company_tag}>
              <img src={demo_company_logo} alt="Company logo" />
              <h3>{job.companyName}</h3>
            </div>
            <div className={style.job_title}>
              <h2>{cleanJobTitle(job.jobTitle)}</h2>
              {job_Applied ? (
                <button style={{ backgroundColor: "#EDEDED" }}>Applied</button>
              ) : (
                <button
                  style={{ backgroundColor: "#398CEB" }}
                  onClick={handleApply}
                >
                  Apply
                </button>
              )}
            </div>

            <div className={style.imp_points}>
              <div className="inner_container">
                <div>
                  <p>Remote from</p>
                  <h4>{job.jobGeo || "---"}</h4>
                </div>
                <div>
                  <p>Department</p>
                  <h4>{(job.jobIndustry && job.jobIndustry[0]) || "---"}</h4>
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
                    Salary {job.salaryPeriod || "---"}{" "}
                    {job.salaryCurrency || "---"}
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
            <div className="job-description">
              {renderJobDescription(job.jobDescription)}
            </div>
            {job_Applied ? (
              <button
                className={style.apply_button}
                style={{ backgroundColor: "#EDEDED" }}
              >
                Applied
              </button>
            ) : (
              <button
                className={style.apply_button}
                style={{ backgroundColor: "#398CEB" }}
                onClick={handleApply}
              >
                Apply
              </button>
            )}
          </article>
        )}
      </section>
    </div>
  );
};

export default JobDetails;
