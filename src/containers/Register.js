import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is a required field."),
  email: yup.string().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
});

const Register = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });
  return (
    <div className="form-wrapper">
      <h2 className="title">BUYER</h2>
      <Form className="form-layout" onSubmit={handleSubmit()}>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="username"
            type="text"
            placeholder="Username"
            defaultValue=""
            ref={register}
            className="form-register-input"
          />
          {errors && errors.username && (
            <span className="text-white">{errors.username.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="email"
            type="email"
            placeholder="Email address"
            defaultValue=""
            ref={register}
            className="form-register-input"
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
            className="form-register-input"
          />
          {errors && errors.password && (
            <span className="text-white">{errors.password.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Button className="dealer-login-button" name="submit">
            REGISTER
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Register;
