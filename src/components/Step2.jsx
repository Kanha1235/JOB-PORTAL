import React, { useState } from "react";
import useForm from "../hooks/useForm";
import * as Yup from "yup";
import { Section } from "../styles/FormStepStyle";

const Step2 = ({ experience, setStep, setApplicationInfo }) => {
  const { values, errors, handleChange, validateForm } = useForm(
    { ...experience },
    validate
  );
  const [skill, setSkill] = useState("");

  const validatorSchema = Yup.object().shape({
    experience: Yup.number()
      .required("Experience is required")
      .min(0, "Experience can't be negative")
      .max(50, "Experience seems invalid"),
    skills: Yup.array()
      .of(Yup.string().trim())
      .min(1, "At least one skill is required"),
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

  function handleSkillChange(e) {
    setSkill(e.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    let temp = skill.trim();
    const e = {
      target: {
        name: "skills",
        value: [...values.skills, temp],
      },
    };
    handleChange(e);
    setSkill("");
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
        <label htmlFor="experience">
          Year of Experience(YOE) <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="number"
          name="experience"
          id="experience"
          value={values.experience}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors && errors.experience && <span>{errors.experience}</span>}
        <br />
        <label htmlFor="skills">
          Skills <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="text"
          name="skills"
          id="skills"
          value={skill}
          onChange={(e) => {
            handleSkillChange(e);
          }}
        />
        <button className="add_button" type="submit" onClick={handleAdd}>
          Add
        </button>
        {errors && errors.skills && <span>{errors.skills}</span>}
        <br />
        <section>
          {values?.skills?.map((item) => {
            return <h3 key={item}>{item}</h3>;
          })}
        </section>

        <div>
          <button>Next</button>
        </div>
      </form>
    </Section>
  );
};

export default Step2;
