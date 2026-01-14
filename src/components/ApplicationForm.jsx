import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/JobDetailsStyle.css";
import { useSelector } from "react-redux";
import style from "../styles/applicationForm.module.css";
import { useGetJobDataQuery } from "../redux/slice/api/jobApiSlice";
import demo_company_logo from "../assets/mock_company_logo.png";
import { cleanJobTitle } from "../utilities/cleanJobTitle";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function getApplicationInfo(applications, id) {
  let job_Applied = applications.find(
    (application) => application.jobId === Number(id)
  );

  let application_info = job_Applied?.info;
  if (!application_info) {
    application_info = {
      applicantName: "",
      email: "",
      phone: "",
      experience: 0,
      skills: [],
      coverLetter: "",
      startDate: 22 - 11 - 2025,
    };
  }
  return application_info;
}

const ApplicationForm = () => {
  const { id } = useParams();
  const applications = useSelector((state) => state.application.applications);
  const { data } = useGetJobDataQuery();
  const [applicationInfo, setApplicationInfo] = useState(
    getApplicationInfo(applications, id)
  );
  const [step, setStep] = useState(1);

  let job_Applied = applications.find(
    (application) => application.jobId === Number(id)
  );

  let job = job_Applied?.job;
  if (!job) {
    job = data?.jobs?.find((job) => job.id === Number(id));
  }
  

  return (
    <div className={style.outer_outer_container}>
      <section className={style.inner_container}>
        {(!job) ? (
          <h1>Loading...</h1>
        ) : (
          <article className={style.outer_container}>
            <div className={style.company_tag}>
              <img src={cleanJobTitle(demo_company_logo)} alt="Company logo" />
              <h3>{job.companyName}</h3>
            </div>
            <div className={style.job_title}>
              <h2>{cleanJobTitle(job.jobTitle)}</h2>
              <h2 style={{ color: "black" }}>
                {(job.jobType && job.jobType[0]) || "---"}
              </h2>
            </div>

            <div className={style.imp_points}>
              <div>
                <p>Remote from</p>
                <h4>{job.jobGeo || "---"}</h4>
              </div>
              <div>
                <p>Experience level</p>
                <h4>{job.jobLevel || "---"}</h4>
              </div>
            </div>
            <section>
              <div className={style.tab_container}>
                {step === 1 ? (
                  <h1
                    style={{
                      backgroundColor: "#e8eef1",
                      borderRadius: "10px 0px 0px 0px",
                    }}
                  >
                    Personal Info
                  </h1>
                ) : (
                  <h1 style={{ borderRadius: "10px 0px 0px 0px" }}>
                    Personal Info
                  </h1>
                )}
                {step === 2 ? (
                  <h1 style={{ backgroundColor: "#e8eef1" }}>Experience</h1>
                ) : (
                  <h1>Experience</h1>
                )}
                {step === 3 ? (
                  <h1
                    style={{
                      backgroundColor: "#e8eef1",
                      borderRadius: "0px 10px 0px 0px",
                    }}
                  >
                    Additional Info
                  </h1>
                ) : (
                  <h1 style={{ borderRadius: "0px 10px 0px 0px" }}>
                    Additional Info
                  </h1>
                )}
              </div>
              {step === 1 ? (
                <Step1
                  personalInfo={{
                    applicantName: applicationInfo.applicantName,
                    email: applicationInfo.email,
                    phone: applicationInfo.phone,
                  }}
                  setStep={setStep}
                  setApplicationInfo={setApplicationInfo}
                />
              ) : step === 2 ? (
                <Step2
                  experience={{
                    experience: applicationInfo.experience,
                    skills: applicationInfo.skills,
                  }}
                  setStep={setStep}
                  setApplicationInfo={setApplicationInfo}
                />
              ) : (
                <Step3
                  applicationInfo={applicationInfo}
                  job={job}
                  setStep={setStep}
                  setApplicationInfo={setApplicationInfo}
                  editting={job_Applied !== undefined}
                />
              )}
            </section>
          </article>
        )}
      </section>
    </div>
  );
};

export default ApplicationForm;
