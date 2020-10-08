import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, Input, Row, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const carsSchema = yup.object().shape({
  car_type: yup.string().required("Car type is a required field."),
  car_make: yup.string().required("Car make is a required field."),
  car_model: yup.string().required("Car model is a required field."),
  credit_score: yup.string().required("Credit score is a required field."),
  miles: yup.string().required("Miles is a required field."),
  zip_code: yup.string().required("Zip code is a required field."),
});

const CarPreferences = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(carsSchema),
  });
  return (
    <div>
      <h4 className="select-car">Select Car Preferences</h4>
      <p className="mandatory-field">* indicates mandatory field</p>
      <Form onSubmit={handleSubmit()}>
        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="car_type"
              type="text"
              placeholder="Car Type*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.car_type && (
              <span className="text-white">{errors.car_type.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="car_make"
              type="text"
              placeholder="Car Make*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.car_make && (
              <span className="text-white">{errors.car_make.message}</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="car_model"
              type="text"
              placeholder="Car Model*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.car_model && (
              <span className="text-white">{errors.car_model.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="credit_score"
              type="text"
              placeholder="Estimated Credit Score*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.credit_score && (
              <span className="text-white">{errors.credit_score.message}</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="miles"
              type="text"
              placeholder="50 miles from*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.miles && (
              <span className="text-white">{errors.miles.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="zip_code"
              type="text"
              placeholder="Zip Code*"
              ref={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.zip_code && (
              <span className="text-white">{errors.zip_code.message}</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Button className="get-started-button">GET STARTED</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CarPreferences;
