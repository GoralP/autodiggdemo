import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";

const carsSchema = yup.object().shape({
  newCar: yup.string().required("Title is a required field."),
});

const CarPreferences = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(carsSchema),
  });
  return (
    <div>
      <h4 className="select-car">Select Car Preferences</h4>
      <p className="mandatory-field">* indicates mandatory field</p>
      <Form>
        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="Car Type*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="Car Make*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="Car Model*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="Estimated Credit Score*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
            )}
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="50 miles from*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
            )}
          </Col>
          <Col sm="6">
            <Controller
              as={Input}
              control={control}
              name="newCar"
              type="text"
              placeholder="Zip Code*"
              // defaultValue={
              //   action === "edit" ? category !== null && category.title : ""
              // }
              ref={register}
              className="seach-form-input"
              //   className={errors && errors.newCar ? "is-invalid" : ""}
            />
            {errors && errors.newCar && (
              <span className="text-danger">{errors.newCar.message}</span>
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
