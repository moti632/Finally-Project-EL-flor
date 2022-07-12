import React from "react";
import Form from "./../common/Form/Form";
import Joi from "joi-browser";
import PageHeader from "./../common/pageHeader";
import { toast } from "react-toastify";
import { getCurrentUser, login, signup } from "../../services/userService";
import { Navigate } from "react-router-dom";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
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
      await signup(user);
      toast.success(`${user.name} you signup successfully`);
      delete user.name;
      await login(user);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({
          errors: { email: "This user is already registered!" },
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
            title="Signup Page"
            subTitle="Please put all the details correctly in the appropriate fields"
          />
          <div className="center pt-4 mt-2">
            <form
              onSubmit={this.handleSubmit}
              autoComplete="off"
              method="POST"
              className="col-12 col-md-10 col-xl-6 border mb-5  p-2 bg-opacity-50 bg-secondary rounded shadow-lg"
            >
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
