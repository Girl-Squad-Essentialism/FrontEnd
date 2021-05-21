import React, { useState, useEffect } from "react";
import * as yup from "yup";
import contactSchema from "./contactSchema";
import emailjs from 'emailjs-com';
import dotenv from "dotenv";
import { init } from 'emailjs-com';
// import './ContactUs.css';   add a design file and import here 

dotenv.config()

init(process.env.YOUR_USER_ID);

const initialFormValues = {
    email: '',
    first_name: '',
    last_name: '',
    message: '',
    phone_number: '',
    service_id: process.env.YOUR_SERVICE_ID,
    template_id: process.env.YOUR_TEMPLATE_ID,
    user_id: process.env.YOUR_USER_ID,
}

const initialFormErrors = {
    email: '',
    first_name: '',
    last_name: '',
    message: '',
    phone_number: ''
}

export default function ContactUs() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)

    const validate = (name, value) => {
        //yup validation schema
        yup
            .reach(contactSchema, name)
            .validate(value)
            .then((valid) => {
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((error) => {
                setFormErrors({
                    ...formErrors,
                    [name]: error.errors[0],
                });
            });
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    };

    const change = (name, value) => {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    useEffect(() => {
        contactSchema.isValid(formValues).then((valid) => {
            console.log(valid)
            setDisabled(!valid);
        });
    }, [formValues]);

    function sendEmail(e) {
        e.preventDefault();
        console.log("here")
        emailjs.send(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, formValues, process.env.YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>

            <div>
                <div>{formErrors.first_name}</div>
                <div>{formErrors.last_name}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.phone_number}</div>
                <div>{formErrors.message}</div>
            </div>

            <input type="hidden" name="contact_number" />
            <label>First Name</label>
            <input value={formValues.first_name} onChange={onChange} type="text" name="first_name" />
            <label>Last Name</label>
            <input value={formValues.last_name} onChange={onChange} type="text" name="last_name" />
            <label>Email</label>
            <input value={formValues.email} onChange={onChange} type="email" name="email" />
            <label>Phone Number</label>
            <input type="tel" value={formValues.phone_number} onChange={onChange} name="phone_number" />
            <label>Message</label>
            <textarea name="message" value={formValues.message} onChange={onChange} />
            <input type="submit" disabled={disabled} id="button" value="Send" />
        </form>
    );
}
