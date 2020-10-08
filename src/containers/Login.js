import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const loginSchema = yup.object().shape({
  email: yup.string().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
});

const Login = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  return (
    <div className="form-wrapper ">
      <h2 className="title">Dealer</h2>
      <Form className="form-layout" onSubmit={handleSubmit()}>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="email"
            type="email"
            placeholder="Email address"
            defaultValue=""
            ref={register}
            className="form-login-input"
          />
          {errors && errors.email && (
            <span className="text-white">{errors.email.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="password"
            type="password"
            placeholder="password"
            defaultValue=""
            ref={register}
            className="form-login-input"
          />
          {errors && errors.password && (
            <span className="text-white">{errors.password.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Button className="dealer-login-button" name="submit">
            SIGN IN
          </Button>
        </FormGroup>
      </Form>
      <div className="separator">OR</div>
      <div className="register-now">Register now</div>
      <div className="forgot-password">Forgot password?</div>
    </div>
  );
};

export default Login;
