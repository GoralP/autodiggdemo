import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Form, Input, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { carMake, carModel } from "../redux/actions";

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

  const dispatch = useDispatch();

  const { loading, carsData,  modalData } = useSelector((state) => ({
    loading: state.carsReducers.allCars.loading,
    carsData: state.carsReducers.allCars.carsData,
    modalData: state.carsReducers.carsModal.modalData,
  }));

  useEffect(() => {
    dispatch(carMake());
  }, [dispatch]);

  const handleChange = (e)=>{
    dispatch(carModel(e.target.value));
  }

  return (
    <Col sm="12">
      <h4 className="select-car">Select Car Preferences</h4>
      <Form onSubmit={handleSubmit()}>
      <div className="mandatory-field">* indicates mandatory field</div>
        <Row >
          <Col sm="6" >
            <Input
              control={control}
              name="car_type"
              type="select"
              placeholder="Car Type*"
              refs={register}
              className="seach-form-input"
              defaultValue=""
            >
              <option>Car Type*</option>
              <option value="New Cars">New Cars</option>
              <option value="Used Cars">Used Cars</option>
              <option value="Certified pre-owned">Certified pre-owned</option>
            </Input>
            {errors && errors.car_type && (
              <span className="text-warning">{errors.car_type.message}</span>
            )}
          </Col>
          <Col sm="6" >
            <Input
              control={control}
              name="car_make"
              type="select"
              refs={register}
              className="seach-form-input"
              defaultValue=""
              onChange={handleChange}
            >
              <option>Car Make*</option>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {carsData !== null &&
                    carsData.results.carMake.map((car) => (
                      <option key={car.makeId} value={car.makeId}>{car.makeName}</option>
                    ))}
                </>
              )}
            </Input>
            {errors && errors.car_make && (
              <span className="text-warning">{errors.car_make.message}</span>
            )}
          </Col>
        </Row>

        <Row className="car-padder">
          <Col sm="6" >
            <Input
              control={control}
              name="car_model"
              type="select"
              refs={register}
              className="seach-form-input"
              defaultValue=""
            >
              <option>Car Model*</option>
              {modalData !== null &&
                modalData.results.carModel.map((car) => (
                  <option key={car.makeId} value={car.modelId}>{car.modelName}</option>
              ))}
            </Input>
           
            {errors && errors.car_model && (
              <span className="text-warning">{errors.car_model.message}</span>
            )}
          </Col>
          <Col sm="6" >
            <Input
              control={control}
              name="credit_score"
              type="select"
              refs={register}
              className="seach-form-input"
              defaultValue=""
            >
              <option>Estimated Credit Score*</option>
              <option value="Credit Challenged">Credit Challenged</option>
              <option value="550-600">550-600</option>
              <option value="600-650">600-650</option>
              <option value="650-700">650-700</option>
              <option value="700-750">700-750</option>
              <option value="Above 750">Above 750</option>
            </Input>
            {errors && errors.credit_score && (
              <span className="text-warning">
                {errors.credit_score.message}
              </span>
            )}
          </Col>
        </Row>

        <Row className="car-padder">
          <Col sm="6" >
            <Input
              control={control}
              name="miles"
              type="select"
              placeholder="50 miles from*"
              refs={register}
              className="seach-form-input"
              defaultValue=""
            >
              <option value="50 miles from">50 miles from</option>
              <option value="75 miles from">75 miles fromm</option>
              <option value="100 miles from">100 miles from</option>
            </Input>

            {errors && errors.miles && (
              <span className="text-warning">{errors.miles.message}</span>
            )}
          </Col>
          <Col sm="6" >
            <Input
              control={control}
              name="zip_code"
              type="number"
              placeholder="Zip Code*"
              refs={register}
              className="seach-form-input"
              defaultValue=""
            />
            {errors && errors.zip_code && (
              <span className="text-warning">{errors.zip_code.message}</span>
            )}
          </Col>
        </Row>
        <Row className="car-padder mt-5">
          <Col sm="12">
            <Button className="get-started-button">GET STARTED</Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default CarPreferences;
