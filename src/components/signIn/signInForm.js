import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import signInSchema from "./signInSchema";
import "./signInForm.css"
import { Form, Input, Button, PageHeader } from 'antd';

//Styling 
const signInStyle = {
    padding: "25%",
    justifyContent: "center"
}
const titleStyle = {
    textAlign: "center",
    paddingLeft: "25%",
    // fontSize: "68px"
}
const linkStyle = {
    textAlign: "center",
    paddingLeft: "43%",
    margin: "10%",
}

const initialFormValues = {
    username: '',
    password: ''
}

const initialFormErrors = {
    username: '',
    password: ''
}
const initialUsers = []
const initialDisabled = true

const SignInForm = () => {

    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    let history = useHistory()

    const postNewUsers = newUser => {
        axios.post('', newUser)
            .then(response => {
                setUsers([...users, response.data])
                localStorage.setItem("token", response.data.token);
                console.log('signIn successful', response.data)
                history.push('/dashboard');
            })
            .catch((error) => {
                // debugger
                console.log(error);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            });
    };
    const validate = (name, value) => {
        //yup validation schema
        yup
            .reach(signInSchema, name)
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

    const onSubmit = event => {
        event.preventDefault()
        submit()
        // change route to home page, dashboard
    }

    const submit = () => {
        const newUser = {
            username: formValues.username.trim(),
            password: formValues.password.trim()
        }
        postNewUsers(newUser)
    }

    useEffect(() => {
        signInSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={signInStyle}
            // initialValues={{
            //   remember: true,
            // }}
            >

                <PageHeader
                    label="SignIn "
                    className="site-page-header"
                    title="SignIn"
                    style={titleStyle}
                />

                <div>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>
                </div>

                <Form.Item
                    label="Username"
                    name="username"
                    type='username'
                    value={formValues.username}
                    onChange={onChange}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    value={formValues.password}
                    onChange={onChange}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" disabled={disabled}>Submit</Button>
                </Form.Item>

                {/* new users click here, or something else, need to sign up? */}
                <div className='sign-in-link'>
                    <Link to='/register' style={linkStyle}>Not a member? Register here.</Link>
                </div>
            </Form>
        </div >
    );
};

export default SignInForm;