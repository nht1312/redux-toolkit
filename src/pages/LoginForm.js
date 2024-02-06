// src/components/LoginForm.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import validationSchema from '../validator/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/authThunk';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(loginUser(values))
        .unwrap()
        .then(() => {
          resetForm();
        });
    },
  });

  return (
    <Form onFinish={formik.handleSubmit}>
      <Form.Item
        label="Email"
        name="email"
        validateStatus={formik.errors.email ? 'error' : ''}
        help={formik.errors.email}
      >
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateStatus={formik.errors.password ? 'error' : ''}
        help={formik.errors.password}
      >
        <Input.Password
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>

      {error && <p>{error}</p>}
    </Form>
  );
};

export default LoginForm;
