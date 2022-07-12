import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../common/Form/Forms";
import PageHeader from "../common/pageHeader";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  return (
    <div style={{ minHeight: "85vh" }} className="container-fluid pb-4">
      <div className="container">
        <PageHeader
          title="Reset Your Password"
          subTitle="Enter a proper email"
        />
        <div className="center pt-5 mt-4">
          <form
            className="col-12 col-md-10 col-xl-6 border mb-5 p-2 bg-opacity-50 bg-secondary rounded shadow-lg"
            method="POST"
            onSubmit={forgotPassword}
            autoComplete={"off"}
          >
            <div className="email mb-3">
              <input
                type="email"
                className={`form-control ${
                  validate.validate && validate.validate.email
                    ? "is-invalid "
                    : ""
                }`}
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.email
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.email
                  ? validate.validate.email[0]
                  : ""}
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Forgot Password
              </button>
            </div>
          </form>
          <div className="pt-5 mt-4 position-absolute">
            <div className="text-center pt-5">
              <Link className="text-light" to="/login">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
