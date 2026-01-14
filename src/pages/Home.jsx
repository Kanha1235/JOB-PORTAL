import React from "react";

import { useGetJobDataQuery } from "../redux/slice/api/jobApiSlice";
import style from "../styles/home.module.css";
import JobCard from "../components/JobCard";

const Home = () => {
  const { data } = useGetJobDataQuery();
  let loading = data ? false : true;
 
  return (
    <>
      <div className={style.outer_container}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={style.inner_container}>
            {data.jobs.map((job) => {
              return (
                <React.Fragment key={job.id}>
                  <JobCard job={job} />
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
