/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Floating className="mb-3">
        <Form.Control
          id="username"
          name="username"
          autoComplete="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Ваш ник"
          required
        />
        <label htmlFor="username">Ваш ник</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Пароль"
          required
        />
        <label htmlFor="password">Пароль</label>
      </Form.Floating>
      <Button className="w-100 mb-3" variant="outline-primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;
