import React from "react";
import useForm from "../hooks/useForm";
import * as Yup from "yup";
import { Section } from "../styles/FormStepStyle";

const Step1 = ({ personalInfo, setStep, setApplicationInfo }) => {
  const { values, errors, handleChange, validateForm } = useForm(
    { ...personalInfo },
    validate
  );

  const validatorSchema = Yup.object().shape({
    applicantName: Yup.string().required("name is required"),
    email: Yup.string()
      .required("email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address"),
    phone: Yup.string()
      .required("phone no. is required")
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
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

  function handleNext(e) {
    e.preventDefault();
    let validationFlag = validateForm();
 
    if (validationFlag) {
      setApplicationInfo((state) => ({ ...state, ...values }));
      setStep((prev) => prev + 1);
    }
  }
 
  return (
    <Section>
      <form onSubmit={handleNext}>
        <label htmlFor="applicantName">
          Full&nbsp;Name <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="text"
          name="applicantName"
          id="applicantName"
          value={values.applicantName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && errors.applicantName && <span>{errors.applicantName}</span>}
        <br />
        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && errors.email && <span>{errors.email}</span>}
        <br />
        <label htmlFor="phone">
          Phone <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="tel"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && errors.phone && <span>{errors.phone}</span>}

        <div>
          <button>Next</button>
        </div>
      </form>
    </Section>
  );
};

export default Step1;
