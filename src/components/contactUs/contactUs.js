import React, { useState, useEffect } from "react";
import * as yup from "yup";
import contactSchema from "./contactSchema";
import emailjs from 'emailjs-com';
import dotenv from "dotenv";
// import './ContactUs.css';   add a design file and import here 

dotenv.config()

const initialFormValues = {
    email: '',
    first_name: '',
    last_name: '',
    message: '',
    phone_number: ''
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
            setDisabled(!valid);
        });
    }, [formValues]);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_USER_ID)
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
            <input type="text" name="last_name" />
            <label>Email</label>
            <input value={formValues.email} onChange={onChange} type="email" name="user_email" />
            <label>Phone Number</label>
            <input type="tel" value={formValues.phone_number} onChange={onChange} name="user_phone" />
            <label>Message</label>
            <textarea name="message" value={formValues.message} onChange={onChange} />
            <input type="submit" disabled={disabled} id="button" value="Send" />
        </form>
    );
}
