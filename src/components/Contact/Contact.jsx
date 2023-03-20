import React, { useState } from "react";
import Joi, { schema } from "joi-browser";
import "./contact.css";
import TextField from "@mui/material/TextField";
import { contactData } from "../../utils/contactService";

const Contact = () => {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  schema = {
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    budget: Joi.string().required(),
    description: Joi.string().required(),
  };

  const doSubmit = async () => {
    await contactData(contact);

  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(contact, schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} });

    if (errors) return;
    doSubmit();
    setContact({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      budget: "",
      description: "",
    });
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemas = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemas);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errorMsg = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errorMsg[input.name] = errorMessage;
    else delete errorMsg[input.name];

    const contactData = { ...contact };
    contactData[input.name] = input.value;
    setContact(contactData, errorMsg);
  };
  return (
    <>
      <div className="contact__container">
        <h3 className="contact__heading">Contact Us</h3>
        <p className="contact__desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
        <div className="form__section">
          <form onSubmit={handleSubmit}>
            <div className="name__grp">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                className="input"
                name="fname"
                value={contact.fname}
                onChange={handleChange}
              />
              <span className="error__msg">
                {errors.errors && errors.errors.fname}
              </span>
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                className="input"
                name="lname"
                value={contact.lname}
                onChange={handleChange}
              />
              <span className="error__lname">
                {errors.errors && errors.errors.lname}
              </span>
            </div>
            <div className="contact__grp">
              <TextField
                id="standard-basic"
                label="Mail"
                variant="standard"
                className="input"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
              <span className="error__email">
                {errors.errors && errors.errors.email}
              </span>
              <TextField
                id="standard-basic"
                label="Phone"
                variant="standard"
                className="input"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
              />
              <span className="error__phone">
                {errors.errors && errors.errors.phone}
              </span>
            </div>
            <div className="desc__grp">
              <TextField
                id="standard-basic"
                label="Budget"
                variant="standard"
                className="input"
                name="budget"
                value={contact.budget}
                onChange={handleChange}
              />
              <span className="error__budget">
                {errors.errors && errors.errors.budget}
              </span>
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                className="input"
                name="description"
                value={contact.description}
                onChange={handleChange}
              />
              <span className="error__desc">
                {errors.errors && errors.errors.description}
              </span>
            </div>
            <div className="form__btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
