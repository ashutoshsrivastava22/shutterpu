const { createContext, useState } = require("react");
const { API_URL, NEXT_URL } = require("../config");
import { useEffect } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const routes = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      routes.push("/account/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      routes.push("/account/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Logout
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });
    const data = await res.json();

    if (res.ok) {
      setUser(null);
      routes.push("/account/login");
    } else {
      setError(data.message);
    }
  };

  // check User
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, user, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
