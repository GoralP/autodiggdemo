import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registration } from "../redux/actions/AuthActions";

const registerSchema = yup.object().shape({
  name: yup.string().required("Username is a required field."),
  email: yup.string().required("Email is a required field."),
  password: yup.string().required("Password is a required field."),
});

const Register = () => {
  const { control, register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(registration(data));
    reset(data);
    history.push("/");
  };

  return (
    <div className="form-wrapper">
      <h2 className="title">buyer</h2>
      <Form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            as={Input}
            control={control}
            name="name"
            type="text"
            placeholder="Username"
            defaultValue=""
            refs={register}
            className="form-register-input"
          />
          {errors && errors.name && (
            <span className="text-warning">{errors.name.message}</span>
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
            refs={register}
            className="form-register-input"
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
            className="form-register-input"
          />
          {errors && errors.password && (
            <span className="text-warning">{errors.password.message}</span>
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
