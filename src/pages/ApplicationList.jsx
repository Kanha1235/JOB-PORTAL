import React from "react";

import { useSelector } from "react-redux";
import style from "../styles/home.module.css";
import ApplicationCard from "../components/ApplicationCard";

const ApplicationList = () => {
  let applications = useSelector((state) => state.application.applications);

  return (
    <>
      <div className={style.outer_container}>
        {applications.length===0? (
          <h1>No Application as of Now</h1>
        ) : (
          <div className={style.inner_container}>
            {applications.map((application) => {
              return (
                <React.Fragment key={application.jobId}>
                  <ApplicationCard application={application} />
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicationList;
