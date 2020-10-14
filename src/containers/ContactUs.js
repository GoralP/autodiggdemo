import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { contactUs } from "../redux/actions/ContactUsActions";
import { useDispatch } from "react-redux";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("E-mail address is a required field."),
  phone: yup.string().required("Phone no is a required field."),
  message: yup.string().required("Message is a required field."),
});

const ContactUS = () => {
  const { control, register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(contactUs(data));
    reset(data);
  };

  return (
    <div>
      <h1 className="home-title text-center">Contact Us</h1>
      <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Row className="contact-us-box">
          <Col sm="4">
            <FormGroup>
              <Controller
                as={Input}
                control={control}
                name="name"
                type="text"
                placeholder="Name*"
                defaultValue=""
                refs={register}
                className="contact-form-input"
              />
              {errors && errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Controller
                as={Input}
                control={control}
                name="email"
                type="email"
                placeholder="Email*"
                defaultValue=""
                refs={register}
                className="contact-form-input"
              />
              {errors && errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Controller
                as={Input}
                control={control}
                name="phone"
                type="number"
                placeholder="Phone*"
                defaultValue=""
                refs={register}
                className="contact-form-input"
              />
              {errors && errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="contact-us-box">
          <Col sm="12">
            <FormGroup>
              <Controller
                as={Input}
                control={control}
                name="message"
                type="textarea"
                placeholder="Your message*"
                defaultValue=""
                refs={register}
                className="contact-form-input contact-input-teaxtarea"
              />
              {errors && errors.message && (
                <span className="text-danger">{errors.message.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="contact-us-box">
          <Col sm="12" className="text-center">
            <FormGroup>
              <Button className="send-message-button">SEND MESSAGE</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactUS;
