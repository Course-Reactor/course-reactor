import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import style from "../styles/components/registration_form.module.scss";

const SUBMIT_ENROLLMENT = gql`
  mutation($full_name: String, $email_address: String, $cohort: String) {
    insert_enrollment_requests(
      objects: {
        full_name: $full_name
        email_address: $email_address
        cohort: $cohort
      }
    ) {
      affected_rows
    }
  }
`;

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [errorText, setErrorText] = useState(undefined);
  const [successText, setSuccessText] = useState(undefined);
  const [submitEnrollment] = useMutation(SUBMIT_ENROLLMENT, {
    onError: ({ graphQLErrors, networkError }) =>
      handleErrors({ graphQLErrors, networkError }),
    onCompleted: (_data) =>
      setSuccessText(
        "We've got you! A member of our team will email you back shortly."
      ),
  });

  const handleErrors = ({ graphQLErrors, networkError }) => {
    graphQLErrors.forEach((error) => {
      if (error.extensions.code === "constraint-violation")
        setErrorText(
          "Hang tight, you're alredy registered! Someone will contact you soon."
        );
      else setErrorText("Something went wrong...");
    });

    if (networkError) setErrorText("Network error, please try again!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText(undefined);
    setSuccessText(undefined);

    submitEnrollment({
      variables: {
        full_name: fullName,
        email_address: emailAddress,
        cohort: "fall_2020_web",
      },
    });
  };

  return (
    <>
      <header>
        <h2>Web Development Degree</h2>
        <span>
          Class Begins: September 1<sup>st</sup> 2020
        </span>
      </header>
      <form onSubmit={handleSubmit} className={style.form}>
        <fieldset>
          <div className={style.horizontal}>
            <legend>Enrollment Form</legend>
            <div className={style.field}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                autoComplete="name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="emailAddress">Email</label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Enter Email Address"
                autoComplete="email"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Enroll</button>
            </div>
          </div>
        </fieldset>
      </form>
      {errorText && <span className={style.error}>{errorText}</span>}
      {successText && <span className={style.success}>{successText}</span>}
    </>
  );
}
