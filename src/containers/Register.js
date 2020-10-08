import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const registerSchema = yup.object().shape({
  newCar: yup.string().required("Title is a required field."),
});

const Register = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });
  return (
    <div className="form-wrapper">
      <h2 className="title">BUYER</h2>
      <Form className="form-layout">
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
            <span className="text-danger">{errors.username.message}</span>
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
            <span className="text-danger">{errors.email.message}</span>
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
            <span className="text-danger">{errors.password.message}</span>
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
