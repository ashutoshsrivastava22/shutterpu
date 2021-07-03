import Layout from "@/components/Layout";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/AuthForm.module.css";

import { useEffect, useContext, useState } from "react";

import { FaUser } from "react-icons/fa";

import AuthContext from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // context call
  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <div className="container mt-50">
      <div className={styles.auth}>
        <h1>Log in</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type="submit" className="btn" value="login" />
        </form>
        <p>
          Don't Have A Account ?{" "}
          <Link href="/account/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
