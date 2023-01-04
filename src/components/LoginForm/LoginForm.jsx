import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Validation from "./Validation";
function LoginForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  function handleChange(el) {
    setValues({ ...values, [el.target.name]: el.target.value });
  }
  const [errors, setErrors] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(Validation(values));
  }
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.password !== ""
    ) {
      navigate(`/logged/${id}/${id}_listing`);
    } // eslint-disable-next-line
  }, [errors]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="formBasicEmail">
          Username
        </label>
        <input
          placeholder="Enter Username"
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={values.email}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="formBasicPassword">
          Password
        </label>
        <input
          placeholder="Enter Password"
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="loginBtnWrap">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
