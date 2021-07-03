import Layout from "@/components/Layout";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/AuthForm.module.css";

import { useEffect, useContext, useState } from "react";

import { FaUser } from "react-icons/fa";

import AuthContext from "@/context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != cpassword) {
      toast.error("password and confirm password don't match");
      return;
    }

    register({ username, email, password });
  };

  return (
    <div className="container">
      <div className={styles.auth}>
        <h2>Register </h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
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

          <div>
            <label htmlFor="CPassword">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              value={cpassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
          </div>
          <input type="submit" className="btn" value="Register" />
        </form>
        <p>
          Have A Account ? <Link href="/account/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
