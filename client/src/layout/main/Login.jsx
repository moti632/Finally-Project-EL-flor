import React from "react";
import Form from "./../common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "./../common/pageHeader";
import { toast } from "react-toastify";
import { getCurrentUser, login } from "../../services/userService";
import { Link, Navigate } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .regex(/^[A-Za-z0-9]+@(?:[A-Za-z]{1,}\.)+[a-zA-Z]{2,}$/)
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .label("Password"),
  };

  doSubmit = async () => {
    try {
      const user = { ...this.state.data };
      await login(user);
      toast.success("you logged successfully");
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "Invalid email or password" },
        });
    }
  };

  render() {
    const user = getCurrentUser();
    if (user) return <Navigate replace to="/" />;

    return (
      <div style={{ minHeight: "85vh" }} className="container-fluid pb-4">
        <div className="container">
          <PageHeader
            title="Login Page"
            subTitle="Fill in the following fields correctly"
          />
          <div className="center pt-5 mt-4">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border mb-5 p-2 bg-opacity-50 bg-secondary rounded shadow-lg
              "
            >
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              <Link className="text-light" to="/forgot-password">
                Forgot password?
              </Link>
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
