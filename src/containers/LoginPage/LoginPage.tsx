import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import './style.scss'
import { BiUserCircle } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage: FC = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: LoginForm) => {
    console.log({ data });

    localStorage.setItem("token", Math.random().toString());
    navigate("/")

    reset();
  };

  return (
    <>
    <div className="LogIn-container">
      <div className="logo-container"></div>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="login-info">

        <h1>LOGIN</h1>
        <h2 className="sub-info">please Login to continue.</h2>
      </div>
        <br />
        <div className="user-type">
          <h2 className="user-type-text"><BiUserCircle/> Candidate</h2>
          <h2 className="user-type-text higlighte"><BiUserCircle/> Employer</h2>
        </div>
          <hr />
        <br />
        <label className="signin_label">Company Email ID</label>
        <input {...register("email")} placeholder="please enter your company email" type="email" />
        <p>{errors.email?.message}</p>
        <br /> 
       <div className="pass-container">
       <span className='eye-icon'>< BsEyeSlash/></span>
        <label className="signin_label">Password</label>
       </div>
        <input
          {...register("password")}
          placeholder="please enter your password"
          type="password"
        />
        <p>{errors.password?.message}</p>
        <Link id="passforget" to="">Forgot Password?</Link>
        <br />
        <button type="submit">Log in <BsArrowRight/></button>
        <br />
        <div className=" button-box">
          <h1 className="register-redirect">don't have an account? <Link className="redirect-register" to="/register">Register now</Link></h1>
        </div>
      </form>
    </div>
     
    </>
  );
};
