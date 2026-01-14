import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  editApplication,
  addApplication,
} from "../redux/slice/state/applicationSlice";
import { formatDateTime } from "../utilities/formatDateTime";
import useForm from "../hooks/useForm";
import * as Yup from "yup";
import { Section } from "../styles/FormStepStyle";

const Step3 = ({ applicationInfo, job, setApplicationInfo, editting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, handleChange, validateForm } = useForm(
    {
      startDate: applicationInfo.startDate,
      coverLetter: applicationInfo.coverLetter,
    },
    validate
  );
  function handleSubmit(e) {
    e.preventDefault();
    let validationFlag = validateForm();
 
    if (validationFlag) {
      setApplicationInfo((state) => ({ ...state, ...values }));

      if (editting) {
        dispatch(
          editApplication({
            jobId: Number(job.id),
            info: { ...applicationInfo, ...values },
            last_modified: formatDateTime(Date.now()),
          })
        );
      } else {
        dispatch(
          addApplication({
            jobId: Number(job.id),
            job: job,
            info: { ...applicationInfo, ...values },
            last_modified: formatDateTime(Date.now()),
          })
        );
       }
      navigate(`/applications/${job.id}`);
      alert("Your Application submitted successsfully!!!");
    }
  }
 
  const validatorSchema = Yup.object().shape({
    startDate: Yup.date()
      .min(new Date(), "Start date cannot be in the past")
      .required("Start date is required"),
    coverLetter: Yup.string()
      .required("Cover letter is required")
      .min(50, "Cover letter must be at least 50 characters"),
  });

  function validate(values) {
     let validationErrors = {};
    try {
      validatorSchema.validateSync(values, { abortEarly: false });
    } catch (error) {
        if (error.inner) {
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
      }
    }

    return validationErrors;
  }

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">
          Expected Joining Date<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={values.startDate}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && errors.startDate && <span>{errors.startDate}</span>}
        <br />
        <label htmlFor="coverLetter">
          Cover Letter<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <textarea
          type="text"
          name="coverLetter"
          id="coverLetter"
          value={values.coverLetter}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Enter your CV"
          rows={9}
        ></textarea>

        {errors && errors.coverLetter && <span>{errors.coverLetter}</span>}
        <br />

        <div>
          <button>Submit</button>
        </div>
      </form>
    </Section>
  );
};

export default Step3;
