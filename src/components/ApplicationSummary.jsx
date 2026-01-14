import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/applicationForm.module.css";
import { useSelector } from "react-redux";
import demo_company_logo from "../assets/mock_company_logo.png";
import { cleanJobTitle } from "../utilities/cleanJobTitle";
import { useRef, useEffect } from "react";

const ApplicationSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applications = useSelector((state) => state.application.applications);
  const textareaRef = useRef();
  let job_Applied = applications.find(
    (application) => application.jobId === Number(id)
  );

  let job = job_Applied?.job;
  const application_info = job_Applied?.info;

  function handleApply(e) {
    navigate(`/apply/${id}`);
  }

  function handleEditApplication(e) {
    navigate(`/apply/${id}`);
  }
  function handleViewAllApplications(e) {
    navigate(`/applications`);
  }
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <div className={style.outer_outer_container}>
      <section className={style.inner_container}>
        {!job_Applied ? (<>
          <h1>You have not applied to this job yet</h1>
          <button style={{padding:"10px 20px", borderRadius:"10px",alignSelf:"flex-start"}} onClick={handleApply}>want to apply</button>
        </>
        ) : (
          <article className={style.outer_container}>
            <div className={style.company_tag}>
              <img src={demo_company_logo} alt="Company logo" />
              <h3>{cleanJobTitle(job.companyName)}</h3>
            </div>
            <div className={style.job_title}>
              <h2>{cleanJobTitle(job.jobTitle)}</h2>
              <h2 style={{ color: "black" }}>
                {(job.jobType && job.jobType[0]) || "---"}
              </h2>
            </div>

            <div className={style.imp_points}>
              <div>
                <p>Applicant Name</p>
                <h4>{application_info?.applicantName || "---"}</h4>
              </div>
              <div>
                <p>Last Modified</p>
                <h4>{job_Applied?.last_modified || "---"}</h4>
              </div>
            </div>
            <h1 className={style.summary_title}>Applicaton Summary</h1>
            <div className={style.sub_summary_block}>
              <h2>Personal Information</h2>
              <div>
                <p>Applicant Name</p>
                <h4>{application_info.applicantName}</h4>
              </div>
              <div>
                <p>Email</p>
                <h4>{application_info.email}</h4>
              </div>
              <div>
                <p>Contact Number</p>
                <h4>{application_info.phone}</h4>
              </div>
            </div>
            <div className={style.sub_summary_block}>
              <h2>Experience</h2>
              <div>
                <p>Year Of Experience</p>
                <h4>{application_info.experience}</h4>
              </div>
              <div>
                <p>Skills</p>
                <section>
                  {application_info?.skills?.map((item) => {
                    return <h3>{item}</h3>;
                  })}
                </section>
              </div>
            </div>
            <div className={style.sub_summary_block}>
              <h2>Additional Information</h2>
              <div>
                <p>Expected Joining Date</p>
                <h4>{application_info.startDate}</h4>
              </div>
              <div>
                <p>Cover Letter</p>
                <textarea
                  ref={textareaRef}
                  disabled
                  value={application_info.coverLetter}
                />
              </div>
            </div>
            <div className={style.navigation_buttons}>
              <button
                className={style.edit_button}
                onClick={handleEditApplication}
              >
                Edit Application
              </button>
              <button
                className={style.view_all_application_button}
                onClick={handleViewAllApplications}
              >
                View all Applications
              </button>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default ApplicationSummary;
