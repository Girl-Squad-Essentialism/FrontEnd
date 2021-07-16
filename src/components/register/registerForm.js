import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import registerSchema from "./registerSchema";
import "./registerForm.css"
import { Form, Input, Button, Typography } from 'antd';

//AntD Styling 
const { Title } = Typography;

// Register 
const initialFormValues = {
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: ''
}
const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: ''
}
const initialUsers = []
const initialDisabled = true

const RegisterForm = () => {

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
        console.log('registration successful', response.data)
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
      .reach(registerSchema, name)
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
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim()
    }
    postNewUsers(newUser)
  }

  useEffect(() => {
    registerSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="main-register">
      <Form
        onSubmit={onSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        style={{ padding: "4%" }}
        initialValues={{
          remember: true,
        }}
      >

        <Title level={1} style={{ textAlign: "center", color: "#ffffff" }}>Register</Title>

        <div>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.first_name}</div>
          <div>{formErrors.last_name}</div>
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
          label="Email"
          name="email"
          type='email'
          value={formValues.email}
          onChange={onChange}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          type='firstName'
          value={formValues.first_name}
          onChange={onChange}
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          type='lastName'
          value={formValues.last_name}
          onChange={onChange}
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={disabled} style={{ textAlign: "center" }}>Submit</Button>
        </Form.Item>



        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Link to='/signin' style={{ textAlign: "center", color: "#ffffff" }}>Already a member? Sign in here.</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;