import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/AuthActions";

const loginSchema = yup.object().shape({
  email: yup.string().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
});

const Login = () => {
  const { control, register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(login(data, history));
    reset(data);
  };
  return (
    <div className="form-wrapper ">
      <h2 className="title">Dealer</h2>
      <Form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="email"
            type="email"
            placeholder="Email address"
            defaultValue=""
            refs={register}
            className="form-login-input"
          />
          {errors && errors.email && (
            <span className="text-warning">{errors.email.message}</span>
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
            refs={register}
            className="form-login-input"
          />
          {errors && errors.password && (
            <span className="text-warning">{errors.password.message}</span>
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
