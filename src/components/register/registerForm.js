import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import registerSchema from "./registerSchema";


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
    <div>
      <form className='form1' onSubmit={onSubmit}>
        <h1>Register</h1>

        <div>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.first_name}</div>
          <div>{formErrors.last_name}</div>
        </div>

        <div className="username1">
          <label>Username:     </label>
          <input
            value={formValues.username}
            onChange={onChange}
            name='username'
            type='username'
          />
        </div>

        <div className="password1">
          <label>Password:     </label>
          <input
            value={formValues.password}
            onChange={onChange}
            autoComplete='true'
            suggested="current-password"
            name='password'
            type='password'
          />
        </div>

        <div className="email1">
          <label>Email:     </label>
          <input
            value={formValues.email}
            onChange={onChange}
            autoComplete='true'
            suggested="email"
            name='email'
            type='email'
          />
        </div>

        <div className="firstName1">
          <label>First Name:     </label>
          <input
            value={formValues.first_name}
            onChange={onChange}
            autoComplete='true'
            suggested="first-name"
            name='first_name'
            type='first_name'
          />
        </div>

        <div className="lastName1">
          <label>Last Name:     </label>
          <input
            value={formValues.last_name}
            onChange={onChange}
            autoComplete='true'
            suggested="last-name"
            name='last_name'
            type='last_name'
          />
        </div>

        <button disabled={disabled} id='button2'>Submit</button>

        {/* new users click here, or something else, need to sign up? */}
        <div className='sign-in-link'>
          <Link to='/signin'>Already a member? Sign in here.</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;